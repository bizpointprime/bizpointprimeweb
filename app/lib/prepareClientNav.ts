import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * ScrollTrigger pin + SplitText/reparent mutations change the DOM shape React
 * expects. Soft navigations then throw NotFoundError on removeChild because
 * useEffect cleanups run after the commit that tears the page down.
 *
 * Call this synchronously on internal link clicks (capture phase) so pinned
 * nodes and split wrappers are restored before Next.js commits the route.
 */

type PrepFn = () => void;

const prepFns = new Set<PrepFn>();
let pluginReady = false;

function ensureScrollTrigger() {
  if (pluginReady) return;
  gsap.registerPlugin(ScrollTrigger);
  pluginReady = true;
}

export function onPrepareClientNav(fn: PrepFn): () => void {
  prepFns.add(fn);
  return () => {
    prepFns.delete(fn);
  };
}

export function prepareClientNav(): void {
  ensureScrollTrigger();

  prepFns.forEach((fn) => {
    try {
      fn();
    } catch {
      // Best-effort: never block navigation if a tween is already gone.
    }
  });

  ScrollTrigger.getAll().forEach((t) => {
    try {
      t.kill();
    } catch {
      /* ignore */
    }
  });

  // Unpinning collapses pin-spacers while window.scrollY stays large, so the
  // next route would mount mid-page. Reset before Next.js commits navigation.
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/** True when this anchor will trigger a same-origin App Router soft navigation. */
export function isSoftNavAnchor(anchor: HTMLAnchorElement, event: MouseEvent): boolean {
  if (event.defaultPrevented || event.button !== 0) return false;
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
  if (anchor.target && anchor.target !== "_self") return false;
  if (anchor.hasAttribute("download")) return false;

  const href = anchor.getAttribute("href");
  if (!href || href.startsWith("#")) return false;

  let url: URL;
  try {
    url = new URL(href, window.location.href);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  if (url.pathname === window.location.pathname && url.search === window.location.search) {
    return false;
  }

  return true;
}
