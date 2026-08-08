import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="nav" id="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <Image className="logo" src="/assets/logo-nav.png" alt="Bizpoint Prime" width={1193} height={650} priority />
        </Link>
        <nav className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact-us">Contact Us</Link>
        </nav>
        <Link href="/contact-us" className="btn sm nav-cta">
          <span>Get Started</span>
        </Link>
      </div>
    </header>
  );
}
