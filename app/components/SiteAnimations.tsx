"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

/**
 * Global scroll/entrance choreography for the site — ported 1:1 from the
 * original static build's vanilla script. Runs once from the root layout so
 * it survives client-side navigation between pages instead of re-firing on
 * every route.
 */
export default function SiteAnimations() {
  useEffect(() => {
    // ---- Nav fill on scroll ----
    const nav = document.getElementById("nav");
    function onNavScroll() {
      nav?.classList.toggle("scrolled", window.scrollY > window.innerHeight * 0.55);
    }
    window.addEventListener("scroll", onNavScroll, { passive: true });
    onNavScroll();

    // ---- Contact form (functional, not motion) ----
    const form = document.getElementById("contact-form") as HTMLFormElement | null;
    function onSubmit(e: Event) {
      e.preventDefault();
      const wrap = form?.parentNode as HTMLElement | null;
      if (wrap) {
        wrap.innerHTML =
          '<div class="thanks"><h3>Request received.</h3><p>A consultant will reach out within one business day. Thank you for getting in touch with Bizpoint Prime.</p></div>';
      }
    }
    form?.addEventListener("submit", onSubmit);

    // ASSUMPTION: prefers-reduced-motion is read once at mount rather than
    // tracked live, matching the original build.
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let lenis: Lenis | null = null;
    let ctx: gsap.Context | null = null;
    let heroSplit: SplitText | null = null;
    let manifestoSplit: SplitText | null = null;
    let tickerCallback: ((time: number) => void) | null = null;
    let onWindowLoadBatches: (() => void) | null = null;
    const onWindowLoadRefresh = () => ScrollTrigger.refresh();

    if (!reduceMotion) {
      gsap.registerPlugin(ScrollTrigger, SplitText);
      ScrollTrigger.config({ ignoreMobileResize: true });

      const EASE_OUT = "power3.out";
      const EASE_INOUT = "power2.inOut";
      const EASE_FOLLOW = "power3.out";
      const DUR = { micro: 0.2, standard: 0.6, statement: 0.9 };
      const STAGGER = { min: 0.06, max: 0.09 };
      const REVEAL_Y = 32;

      ctx = gsap.context(() => {
        // ---- LENIS ----
        lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        lenis.on("scroll", ScrollTrigger.update);
        tickerCallback = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(tickerCallback);
        gsap.ticker.lagSmoothing(0);

        // ---- HERO ----
        let heroEntered = false;
        function buildHeroTimeline(lines: Element[]) {
          const groundline = document.querySelector(".hero-groundline");
          const gridLines = gsap.utils.toArray<HTMLElement>(".hero-grid-lines .v");
          const heroKicker = document.querySelector(".hero-kicker");
          const heroCta = document.querySelector(".hero-cta");
          const heroTrustRow = document.querySelector(".hero-trust-row");
          const chips = gsap.utils.toArray<HTMLElement>(".hero-chip");
          const navEl = document.getElementById("nav");

          gsap.set([groundline, gridLines], { willChange: "transform" });

          const tl = gsap.timeline({
            defaults: { ease: EASE_OUT },
            onComplete: function () {
              gsap.set([groundline, gridLines], { willChange: "auto" });
            },
          });

          tl.from(navEl, { opacity: 0, y: -8, duration: DUR.micro }, 0)
            .fromTo(
              groundline,
              { scaleX: 0 },
              { scaleX: 1, duration: DUR.standard, transformOrigin: "left center" },
              0
            )
            .fromTo(
              gridLines,
              { scaleY: 0 },
              { scaleY: 1, duration: DUR.standard, stagger: STAGGER.min, transformOrigin: "top" },
              0
            )
            .from(heroKicker, { opacity: 0, y: 24, duration: DUR.standard }, 0)
            .from(lines, { yPercent: 110, duration: DUR.statement, stagger: STAGGER.max }, 0.15)
            .from(chips, { opacity: 0, scale: 0.96, duration: DUR.standard, stagger: STAGGER.min }, 0.45)
            .from(heroCta, { opacity: 0, y: 24, duration: DUR.standard }, 0.5)
            .from(heroTrustRow, { opacity: 0, y: 24, duration: DUR.standard }, 0.55);

          [
            { sel: ".hero-bg-wrap", y: -2 },
            { sel: ".hero-grid-lines", y: -6 },
            { sel: ".hero-content", y: -4 },
            { sel: ".hero-trust-corner", y: -10 },
          ].forEach((layer) => {
            gsap.to(layer.sel, {
              yPercent: layer.y,
              ease: "none",
              scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1,
                onToggle: (self) => gsap.set(layer.sel, { willChange: self.isActive ? "transform" : "auto" }),
              },
            });
          });

          return tl;
        }

        if (document.querySelector(".hero")) {
          heroSplit = SplitText.create(".hero h1 .line", {
            type: "lines",
            mask: "lines",
            autoSplit: true,
            onSplit: (self) => {
              if (!heroEntered) {
                heroEntered = true;
                buildHeroTimeline(self.lines);
                return;
              }
              gsap.set(self.lines, { yPercent: 0 });
            },
          });
        }

        // ---- MANIFESTO ----
        let manifestoTrigger: gsap.core.Tween | null = null;
        if (document.querySelector(".manifesto")) {
          manifestoSplit = SplitText.create(".manifesto p", {
            type: "words",
            autoSplit: true,
            onSplit: (self) => {
              if (manifestoTrigger) manifestoTrigger.scrollTrigger?.kill();
              gsap.set(self.words, { opacity: 0.15 });
              manifestoTrigger = gsap.to(self.words, {
                opacity: 1,
                ease: "none",
                stagger: { each: 0.02 },
                scrollTrigger: {
                  trigger: ".manifesto",
                  start: "top 75%",
                  end: "bottom 60%",
                  scrub: 1,
                },
              });
            },
          });
        }

        // ---- GLOBAL REVEALS ----
        const revealEls = gsap.utils.toArray<HTMLElement>(".reveal");
        gsap.set(revealEls, { opacity: 0, y: REVEAL_Y });

        const faqItems = gsap.utils.toArray<HTMLElement>(".faq-item");
        gsap.set(faqItems, { opacity: 0, y: -REVEAL_Y });

        function wireOnceBatches() {
          ScrollTrigger.batch(revealEls, {
            start: "top 87%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: DUR.standard, ease: EASE_OUT, stagger: STAGGER.max }),
          });
          ScrollTrigger.batch(faqItems, {
            start: "top 87%",
            once: true,
            onEnter: (batch) =>
              gsap.to(batch, { opacity: 1, y: 0, duration: DUR.standard, ease: EASE_OUT, stagger: STAGGER.max }),
          });
        }
        if (document.readyState === "complete") {
          wireOnceBatches();
        } else {
          onWindowLoadBatches = wireOnceBatches;
          window.addEventListener("load", onWindowLoadBatches);
        }

        // ---- SHOWCASE ----
        if (document.querySelector(".showcase")) {
          gsap.fromTo(
            "#showcase-bg",
            { yPercent: -9, scale: 1.18 },
            {
              yPercent: 9,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: ".showcase",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
                onToggle: (self) => gsap.set("#showcase-bg", { willChange: self.isActive ? "transform" : "auto" }),
              },
            }
          );

          const capInner = document.querySelector(".showcase .cap .inner");
          if (capInner) {
            const capCurtain = document.createElement("div");
            capCurtain.className = "wipe-overlay wipe-overlay--caption";
            capCurtain.setAttribute("aria-hidden", "true");
            capInner.appendChild(capCurtain);
            gsap.fromTo(
              capCurtain,
              { scaleY: 1 },
              {
                scaleY: 0,
                duration: DUR.statement,
                ease: EASE_OUT,
                transformOrigin: "bottom",
                scrollTrigger: { trigger: ".showcase", start: "top 70%", toggleActions: "play none none none" },
                onComplete: () => capCurtain.remove(),
              }
            );
          }
        }

        // ---- STATS ----
        gsap.utils.toArray<HTMLElement>(".stat").forEach((stat) => {
          const numEl = stat.querySelector<HTMLElement>(".num");
          if (!numEl) return;
          const target = parseInt(numEl.getAttribute("data-count") || "0", 10);
          const suffix = numEl.getAttribute("data-suffix") || "";
          const proxy = { val: 0 };
          gsap.to(proxy, {
            val: target,
            ease: "none",
            onUpdate: () => {
              numEl.textContent = Math.round(proxy.val) + suffix;
            },
            scrollTrigger: { trigger: stat, start: "top 85%", end: "top 40%", scrub: 1 },
          });
        });

        // ---- MARQUEE ----
        const marqueeTrack = document.querySelector(".marquee-track");
        if (marqueeTrack) {
          const marqueeTween = gsap.to(marqueeTrack, { xPercent: -50, duration: 45, ease: "none", repeat: -1 });
          const skewTo = gsap.quickTo(marqueeTrack, "skewX", { duration: 0.5, ease: EASE_FOLLOW });
          ScrollTrigger.create({
            trigger: ".marquee",
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => {
              const v = gsap.utils.clamp(-1.5, 1.5, self.getVelocity() / -1000);
              marqueeTween.timeScale(1 + v * 0.6);
              skewTo(gsap.utils.clamp(-6, 6, v * 6));
            },
            onLeave: () => {
              marqueeTween.timeScale(1);
              skewTo(0);
            },
            onLeaveBack: () => {
              marqueeTween.timeScale(1);
              skewTo(0);
            },
          });
        }

        // ---- DESKTOP-ONLY LAYER ----
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px) and (hover: hover) and (pointer: fine)", () => {
          if (document.getElementById("svc-intro")) {
            const svcTl = gsap.timeline({
              scrollTrigger: {
                trigger: "#svc-intro",
                start: "top 80%",
                end: "top 30%",
                scrub: 1,
                onToggle: (self) =>
                  gsap.set(["#svc-left", "#svc-right"], { willChange: self.isActive ? "transform" : "auto" }),
              },
            });
            svcTl
              .fromTo("#svc-left", { xPercent: -42, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "none" }, 0)
              .fromTo("#svc-right", { xPercent: 42, opacity: 0 }, { xPercent: 0, opacity: 1, ease: "none" }, 0);
          }

          const magnetHandlers = gsap.utils.toArray<HTMLElement>(".btn").map((btn) => {
            const qx = gsap.quickTo(btn, "x", { duration: 0.4, ease: EASE_FOLLOW });
            const qy = gsap.quickTo(btn, "y", { duration: 0.4, ease: EASE_FOLLOW });
            function move(e: MouseEvent) {
              const r = btn.getBoundingClientRect();
              qx((e.clientX - r.left - r.width / 2) * 0.35);
              qy((e.clientY - r.top - r.height / 2) * 0.35);
            }
            function leave() {
              qx(0);
              qy(0);
            }
            btn.addEventListener("mousemove", move);
            btn.addEventListener("mouseleave", leave);
            return { btn, move, leave };
          });

          const cursor = document.getElementById("cursor");
          const cursorSpan = cursor?.querySelector("span") ?? null;
          const cursorTargets = gsap.utils.toArray<HTMLElement>(".card, .tile");
          let cursorMove: ((e: MouseEvent) => void) | null = null;
          function cursorEnter() {
            gsap.to(cursor, { scale: 1, duration: DUR.micro, ease: EASE_INOUT });
            gsap.to(cursorSpan, { opacity: 1, duration: DUR.micro, ease: EASE_INOUT });
          }
          function cursorLeave() {
            gsap.to(cursor, { scale: 0.14, duration: DUR.micro, ease: EASE_INOUT });
            gsap.to(cursorSpan, { opacity: 0, duration: DUR.micro, ease: EASE_INOUT });
          }
          if (cursor) {
            document.body.classList.add("has-custom-cursor");
            gsap.set(cursor, { scale: 0.14, opacity: 1 });
            const cx = gsap.quickTo(cursor, "x", { duration: 0.2, ease: EASE_FOLLOW });
            const cy = gsap.quickTo(cursor, "y", { duration: 0.2, ease: EASE_FOLLOW });
            cursorMove = (e: MouseEvent) => {
              cx(e.clientX);
              cy(e.clientY);
            };
            window.addEventListener("mousemove", cursorMove);
            cursorTargets.forEach((el) => {
              el.addEventListener("mouseenter", cursorEnter);
              el.addEventListener("mouseleave", cursorLeave);
            });
          }

          const preview = document.getElementById("jur-preview");
          const previewImg = preview?.querySelector("img");
          const jurLinks = gsap.utils.toArray<HTMLElement>(".jur-list a");
          let previewMove: ((e: MouseEvent) => void) | null = null;
          function jurEnter(e: MouseEvent) {
            const src = (e.currentTarget as HTMLElement).getAttribute("data-preview");
            if (src && previewImg) previewImg.setAttribute("src", src);
            gsap.to(preview, { opacity: 1, scale: 1, duration: DUR.micro, ease: EASE_INOUT });
          }
          function jurLeave() {
            gsap.to(preview, { opacity: 0, scale: 0.96, duration: DUR.micro, ease: EASE_INOUT });
          }
          if (preview && jurLinks.length) {
            gsap.set(preview, { scale: 0.96 });
            const px = gsap.quickTo(preview, "x", { duration: 0.5, ease: EASE_FOLLOW });
            const py = gsap.quickTo(preview, "y", { duration: 0.5, ease: EASE_FOLLOW });
            previewMove = (e: MouseEvent) => {
              px(e.clientX + 24);
              py(e.clientY - 90);
            };
            window.addEventListener("mousemove", previewMove);
            jurLinks.forEach((a) => {
              a.addEventListener("mouseenter", jurEnter);
              a.addEventListener("mouseleave", jurLeave);
            });
          }

          return function cleanup() {
            magnetHandlers.forEach((h) => {
              h.btn.removeEventListener("mousemove", h.move);
              h.btn.removeEventListener("mouseleave", h.leave);
              gsap.set(h.btn, { clearProps: "transform" });
            });
            if (cursorMove) {
              window.removeEventListener("mousemove", cursorMove);
              document.body.classList.remove("has-custom-cursor");
              gsap.set(cursor, { opacity: 0 });
              cursorTargets.forEach((el) => {
                el.removeEventListener("mouseenter", cursorEnter);
                el.removeEventListener("mouseleave", cursorLeave);
              });
            }
            if (previewMove) {
              window.removeEventListener("mousemove", previewMove);
              gsap.set(preview, { opacity: 0 });
              jurLinks.forEach((a) => {
                a.removeEventListener("mouseenter", jurEnter);
                a.removeEventListener("mouseleave", jurLeave);
              });
            }
          };
        });
      });

      window.addEventListener("load", onWindowLoadRefresh);
    }

    return () => {
      window.removeEventListener("scroll", onNavScroll);
      form?.removeEventListener("submit", onSubmit);
      if (onWindowLoadBatches) window.removeEventListener("load", onWindowLoadBatches);
      window.removeEventListener("load", onWindowLoadRefresh);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
      ctx?.revert();
      heroSplit?.revert();
      manifestoSplit?.revert();
    };
  }, []);

  return null;
}
