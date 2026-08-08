import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrapc foot-top">
        <div className="foot-brand">
          <Image
            className="logo"
            src="/assets/logo-footer.png"
            alt="Bizpoint Prime Business Solutions LLC"
            width={1193}
            height={759}
          />
          <p>
            Prime. Made. Easy. — a trusted business solutions and corporate services provider in
            the UAE, supporting individuals, entrepreneurs, and companies under one roof.
          </p>
        </div>
        <div className="foot-col">
          <p className="foot-h">Quick Links</p>
          <nav className="foot-nav">
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/blogs">Blogs</a>
            <a href="/gallery">Gallery</a>
            <a href="/#contact">Contact Us</a>
          </nav>
        </div>
        <div className="foot-col">
          <p className="foot-h">Our Services</p>
          <nav className="foot-nav">
            <a href="/business-setup-dubai">Business Setup</a>
            <a href="/legal-translation-dubai">Legal Translation</a>
            <a href="/notary-services">Notary Services</a>
            <a href="/vat-registration">VAT Registration</a>
            <a href="/family-visa-services">Family Visa Services</a>
            <a href="/document-attestation">Attestation Services</a>
            <a href="/pro-services-dubai">PRO Services</a>
            <a href="/golden-visa-services">Golden Visa Services</a>
            <a href="/typing-services">Typing Services</a>
            <a href="/branding-marketing">Branding &amp; Marketing</a>
          </nav>
        </div>
        <div className="foot-col">
          <p className="foot-h">Contact Us</p>
          <div className="foot-contact">
            <div>
              <span className="dot"></span>Office No: A1-3, Unique Business World, Metha Plaza
              Building, Block A, Oud Metha, Dubai, UAE
            </div>
            <a href="tel:+971543084251">+971 54 308 4251</a>
            <a href="tel:+971509207769">+971 50 920 7769</a>
            <a href="tel:+97142522092">+971 4 252 2092 (Landline)</a>
            <a href="mailto:bizpointprime@gmail.com">bizpointprime@gmail.com</a>
          </div>
          <p className="foot-h" style={{ marginTop: 24 }}>
            Follow Us
          </p>
          <div className="foot-contact" style={{ flexDirection: "row", gap: 16 }}>
            <a href="#" target="_blank" rel="noopener">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noopener">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="foot-bot">
        <div className="wrapc in">
          <span>
            © <span id="year">{year}</span> Bizpoint Prime Business Solutions LLC. All rights
            reserved.
          </span>
          <span>
            <a href="#">Privacy Policy</a> · <a href="#">Terms of Service</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
