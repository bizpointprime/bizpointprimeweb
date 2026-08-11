"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);
  const panelId = useId();

  // Close the mobile menu on navigation. Set during render (React's
  // documented pattern for resetting state when a prop changes) rather than
  // in an effect, which would cause an extra cascading render.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onResize() {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    }

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`nav${open ? " menu-open" : ""}`} id="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <Image className="logo" src="/assets/logo-nav.png" alt="Bizpoint Prime" width={1193} height={650} priority />
        </Link>
        <nav className="links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact-us" className="btn sm nav-cta">
          <span>Get Started</span>
        </Link>
        <button
          type="button"
          className="nav-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-menu-btn__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        className="nav-mobile"
        hidden={!open}
        aria-hidden={!open}
      >
        <nav className="nav-mobile__links" aria-label="Mobile">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact-us" className="btn sm nav-mobile__cta" onClick={() => setOpen(false)}>
          <span>Get Started</span>
        </Link>
      </div>
    </header>
  );
}
