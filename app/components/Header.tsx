import Image from "next/image";

export default function Header() {
  return (
    <header className="nav" id="nav">
      <div className="wrap nav-inner">
        <a href="/" className="brand">
          <Image className="logo" src="/assets/logo-nav.png" alt="Bizpoint Prime" width={1193} height={650} priority />
        </a>
        <nav className="links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/blogs">Blogs</a>
          <a href="/gallery">Gallery</a>
          <a href="/#contact">Contact Us</a>
        </nav>
        <a href="/#contact" className="btn sm nav-cta">
          <span>Get Started</span>
        </a>
      </div>
    </header>
  );
}
