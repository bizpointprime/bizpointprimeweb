/* eslint-disable @next/next/no-img-element */
import type { CSSProperties } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSequence from "./components/HeroSequence";

const padTop96Bottom128: CSSProperties = { paddingTop: 96, paddingBottom: 128 };

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section id="top" className="hero">
        <HeroSequence />
        <div className="hero-groundline" aria-hidden="true"></div>
        <div className="hero-grid-lines" aria-hidden="true">
          <span className="v" style={{ left: "20%" }}></span>
          <span className="v" style={{ left: "50%" }}></span>
          <span className="v" style={{ left: "80%" }}></span>
        </div>
        <div className="wrap hero-content">
          <span className="hero-kicker">
            <span className="dot" aria-hidden="true"></span>Prime. Made. Easy.
          </span>
          <h1 className="display">
            <span className="line">Together, we</span>
            <span className="line accent">make it happen.</span>
          </h1>
          <p className="hero-desc">
            Bizpoint Prime Business Solutions LLC is a trusted business solutions and corporate
            services provider in the UAE — supporting individuals, entrepreneurs, and companies
            with business setup, legal translation, government services, visa assistance, and
            more.
          </p>
          <div className="hero-cta" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#contact" className="btn">
              <span>Get Started</span>
            </a>
            <a href="#contact" className="btn outline-light">
              <span>Contact Us</span>
            </a>
          </div>
          <div className="hero-chips">
            <a href="/business-setup-dubai" className="hero-chip">
              Business Setup
            </a>
            <a href="/legal-translation-dubai" className="hero-chip">
              Legal Translation
            </a>
            <a href="/family-visa-services" className="hero-chip">
              Family Visa Services
            </a>
            <a href="/vat-registration" className="hero-chip">
              VAT Registration
            </a>
          </div>
        </div>
        <div className="hero-trust-row hero-trust-corner">
          <div className="hero-avatars" aria-hidden="true">
            <span>UF</span>
            <span>AS</span>
            <span>MK</span>
            <span>AA</span>
            <span>AM</span>
          </div>
          <p className="hero-trust">Trusted by 300+ businesses across the UAE.</p>
        </div>
      </section>

      {/* STATS */}
      <section>
        <div className="wrapc" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="stats-grid">
            <div className="stat reveal">
              <div className="num" data-count="120" data-suffix="+">
                0+
              </div>
              <p>Company formations completed</p>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="300" data-suffix="+">
                0+
              </div>
              <p>Clients served across the UAE</p>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="50" data-suffix="+">
                0+
              </div>
              <p>Language pairs translated</p>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="24" data-suffix="h">
                0h
              </div>
              <p>Standard document turnaround</p>
            </div>
            <div className="stat reveal">
              <div className="num" data-count="5" data-suffix="+">
                0+
              </div>
              <p>Years operating in Dubai</p>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="wrap">
          <p>
            Prime. Made. Easy. <em>Together, we make it happen.</em>
          </p>
          <div className="reveal" style={{ marginTop: 40 }}>
            <a href="#formation" className="btn">
              <span>See how we work</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="legal" style={{ overflow: "hidden" }}>
        <div className="wrapc sec-pad">
          <div className="svc-intro" id="svc-intro">
            <div className="svc-side" id="svc-left">
              <div className="box">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fm=jpg&fit=crop&auto=format"
                  alt=""
                />
              </div>
            </div>
            <div className="svc-center reveal">
              <h2 className="display">
                Our <span className="accent">Services</span>
              </h2>
              <p>Everything your business needs, all in one place — from business setup to branding and marketing.</p>
            </div>
            <div className="svc-side" id="svc-right">
              <div className="box">
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=800&q=80&fm=jpg&fit=crop&auto=format"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="svc-cards">
            <a href="/business-setup-dubai" id="formation" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1574188231145-5f204395d7d5?w=1200&q=80&fm=jpg&fit=crop&auto=format"
                alt="Business Setup"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Business Setup</h3>
                <p>Launch your Mainland or Free Zone business with expert guidance from company registration to licensing and beyond.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/legal-translation-dubai" id="translation" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1695238668015-7bc526956af7?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Legal Translation"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Legal Translation</h3>
                <p>Certified legal translations accepted by UAE Courts, the Ministry of Justice, embassies, and government authorities in 120+ languages.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/notary-services" id="notary" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Notary Services"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Notary Services</h3>
                <p>Professional assistance with Powers of Attorney, declarations, affidavits, agreements, and notarization services.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/vat-registration" id="vat" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="VAT Registration"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>VAT Registration</h3>
                <p>Complete VAT registration, amendments, deregistration, and compliance support to keep your business tax-ready.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/family-visa-services" id="family-visa" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Family Visa Services"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Family Visa Services</h3>
                <p>End-to-end support for family sponsorship, residence visas, renewals, and status changes.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/document-attestation" id="attestation" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Attestation Services"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Attestation Services</h3>
                <p>Fast and reliable attestation of educational, commercial, and personal documents for use in the UAE and abroad.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/pro-services-dubai" id="pro-services" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1758519288948-e3c87d2d78d8?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="PRO Services"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>PRO Services</h3>
                <p>Efficient government liaison services, including document clearing, trade license renewals, labour, immigration, and corporate administration.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/golden-visa-services" id="golden-visa" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Golden Visa Services"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Golden Visa Services</h3>
                <p>Expert guidance on UAE Golden Visa eligibility, documentation, and application processing for a smooth experience.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
            <a href="/branding-marketing" id="branding" className="card reveal">
              <img
                src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Branding & Marketing"
              />
              <div className="grad"></div>
              <div className="body">
                <h3>Branding &amp; Marketing</h3>
                <p>Create a powerful brand with professional branding, digital marketing, website development, and business growth solutions.</p>
                <span className="more">
                  <span className="ul">View details</span> ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 112 }}>
          <div className="about-grid">
            <div>
              <p className="kicker reveal">Welcome to Bizpoint Prime</p>
              <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "44ch" }}>
                Smart Business Starts Here.
              </h2>
              <p
                className="reveal"
                style={{
                  marginTop: 20,
                  maxWidth: "52ch",
                  fontSize: "15.5px",
                  lineHeight: 1.6,
                  color: "var(--fg-muted)",
                }}
              >
                Starting or managing a business in the UAE involves numerous legal,
                administrative, and regulatory requirements. At Bizpoint Prime Business
                Solutions LLC, we simplify every step by offering comprehensive business and
                corporate solutions under one roof. From company formation and government
                approvals to legal documentation, visa services, branding, and marketing, our
                experienced team is committed to delivering reliable, transparent, and efficient
                services tailored to your business goals. Our mission is simple: Prime. Made.
                Easy.
              </p>
              <div
                className="reveal"
                style={{ marginTop: 32, display: "flex", gap: 16, flexWrap: "wrap" }}
              >
                <a href="#contact" className="btn">
                  <span>Get Started</span>
                </a>
                <a href="#legal" className="btn outline">
                  <span>See our services</span>
                </a>
              </div>
            </div>
            <div className="about-mosaic reveal">
              <div className="about-tile">
                <span className="chk" aria-hidden="true">✓</span>
                <p>Company formation &amp; government approvals</p>
              </div>
              <div className="about-tile">
                <span className="chk" aria-hidden="true">✓</span>
                <p>Legal documentation &amp; notarization</p>
              </div>
              <div className="about-tile">
                <span className="chk" aria-hidden="true">✓</span>
                <p>Visa services, VAT registration &amp; attestation</p>
              </div>
              <div className="about-tile">
                <span className="chk" aria-hidden="true">✓</span>
                <p>Branding, marketing &amp; business growth support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: "var(--bg-raised)" }}>
        <div className="wrapc" style={padTop96Bottom128}>
          <div className="why-layout">
            <div className="why-photo reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Bizpoint Prime consultants at work"
              />
            </div>
            <div>
              <p className="kicker reveal">Why Bizpoint Prime</p>
              <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "44ch" }}>
                Why Choose Bizpoint Prime?
              </h2>
              <div className="about-checklist">
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Experienced Corporate Consultants
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>One-Stop Business Solutions
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Fast &amp; Reliable Processing
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Transparent Pricing
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Personalized Client Support
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>End-to-End Government Assistance
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Professional Legal Documentation
                </div>
                <div className="reveal">
                  <span className="check" aria-hidden="true">✓</span>Business Growth Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JURISDICTIONS */}
      <section id="jurisdictions">
        <div className="wrapc" style={padTop96Bottom128}>
          <p className="kicker reveal">Where we operate</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "46ch" }}>
            Licensed to set up your business across Dubai&rsquo;s jurisdictions.
          </h2>
          <div className="jur-list">
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              Dubai Mainland (DED)<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              DIFC<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1574188231145-5f204395d7d5?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              DMCC<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1758519288948-e3c87d2d78d8?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              JAFZA<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1695238668015-7bc526956af7?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              Dubai South<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              Abu Dhabi<span className="comma">,</span>
            </a>
            <a
              href="#contact"
              className="reveal"
              data-preview="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&q=80&fm=jpg&fit=crop&auto=format"
            >
              Sharjah<span className="comma">,</span>
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ borderTop: "none" }}>
        <div className="wrapc" style={padTop96Bottom128}>
          <p className="kicker reveal">Our Process</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "52ch" }}>
            How an engagement with Bizpoint Prime runs.
          </h2>
          <div className="proc-grid">
            <div className="proc reveal">
              <h3>Consultation</h3>
              <p>We understand your requirements and recommend the most suitable solution.</p>
            </div>
            <div className="proc reveal">
              <h3>Documentation</h3>
              <p>Our specialists prepare and review all necessary documents.</p>
            </div>
            <div className="proc reveal">
              <h3>Processing</h3>
              <p>We coordinate with the relevant authorities to ensure smooth approvals and timely completion.</p>
            </div>
            <div className="proc reveal">
              <h3>Success</h3>
              <p>Your business is established, compliant, and ready for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="wrapc" style={padTop96Bottom128}>
          <p className="kicker reveal">FAQs</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "44ch" }}>
            Frequently asked questions.
          </h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>
                <span className="faq-left">
                  <span className="faq-num">01</span>
                  <span className="faq-q">Is Bizpoint Prime&rsquo;s legal translation MOJ-approved?</span>
                </span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Yes. All Bizpoint Prime translators hold Ministry of Justice certification, and
                every legal translation we produce is recognised by Dubai Courts, MOFA, and UAE
                embassies.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-left">
                  <span className="faq-num">02</span>
                  <span className="faq-q">What documents can Bizpoint Prime translate legally?</span>
                </span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Contracts, court documents, certificates, powers of attorney, corporate documents,
                visa applications, and more — translated to the standard UAE authorities require.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-left">
                  <span className="faq-num">03</span>
                  <span className="faq-q">How much does legal translation cost?</span>
                </span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Pricing depends on language pair, document type, and turnaround. Share your
                documents and we&rsquo;ll confirm a fixed quote before any work begins — no hidden
                fees.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-left">
                  <span className="faq-num">04</span>
                  <span className="faq-q">How long does legal translation take?</span>
                </span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Standard turnaround is 24–48 hours. Same-day service is available for most
                documents, with an express option for urgent requirements.
              </p>
            </details>
            <details className="faq-item">
              <summary>
                <span className="faq-left">
                  <span className="faq-num">05</span>
                  <span className="faq-q">Do you offer business setup services in Dubai?</span>
                </span>
                <span className="faq-icon" aria-hidden="true">+</span>
              </summary>
              <p>
                Yes — mainland, free zone, and offshore company formation, from trade name
                registration through to licence issuance.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee" id="gallery">
        <div className="marquee-track">
          {[
            "photo-1454165804606-c3d57bc86b40",
            "photo-1450101499163-c8848c66ca85",
            "photo-1521791136064-7986c2920216",
            "photo-1589829545856-d10d557cf95f",
            "photo-1507842217343-583bb7270b66",
            "photo-1423592707957-3b212afa6733",
            "photo-1454165804606-c3d57bc86b40",
            "photo-1450101499163-c8848c66ca85",
            "photo-1521791136064-7986c2920216",
            "photo-1589829545856-d10d557cf95f",
            "photo-1507842217343-583bb7270b66",
            "photo-1423592707957-3b212afa6733",
          ].map((id, i) => (
            <div className="cell" key={i}>
              <img
                src={`https://images.unsplash.com/${id}?w=600&q=80&fm=jpg&fit=crop&auto=format`}
                alt=""
              />
            </div>
          ))}
        </div>
      </section>

      {/* BLOG */}
      <section id="insights">
        <div className="wrapc" style={padTop96Bottom128}>
          <h2 className="h-sec reveal" style={{ maxWidth: "52ch" }}>
            Recent insights for businesses setting up in Dubai.
          </h2>
          <div className="blog-grid">
            <article className="blog-feat reveal">
              <div className="img">
                <img
                  src="https://images.unsplash.com/photo-1768069794826-a31af289449f?w=1200&q=80&fm=jpg&fit=crop&auto=format"
                  alt=""
                />
              </div>
              <p className="meta">
                June 2026 <span className="sep">/</span> 7 min read
              </p>
              <h3>UAE Corporate Tax: What New Businesses Need to Register For</h3>
              <p>
                A practical breakdown of registration deadlines, exemptions, and what free zone
                entities specifically need to file in their first year.
              </p>
            </article>
            <div className="blog-col">
              <article className="blog-sec reveal">
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1523270918669-1fd17ac1742d?w=900&q=80&fm=jpg&fit=crop&auto=format"
                    alt=""
                  />
                </div>
                <div>
                  <p className="meta">
                    May 2026 <span className="sep">/</span> 5 min read
                  </p>
                  <h3>Mainland or Free Zone: How to Choose the Right Licence</h3>
                  <p className="ex">
                    Ownership rules, visa quotas, and cost differences that actually decide the
                    right structure for your business.
                  </p>
                </div>
              </article>
              <article className="blog-sec reveal">
                <div className="img">
                  <img
                    src="https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=900&q=80&fm=jpg&fit=crop&auto=format"
                    alt=""
                  />
                </div>
                <div>
                  <p className="meta">
                    April 2026 <span className="sep">/</span> 4 min read
                  </p>
                  <h3>Why Court-Ready Translation Is Different From Standard Translation</h3>
                  <p className="ex">
                    What MOJ certification actually checks for, and why an uncertified
                    translation gets rejected at the counter.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section>
        <div className="wrapc" style={padTop96Bottom128}>
          <div className="quotes">
            <div className="quote reveal">
              <p className="q">
                &ldquo;Bizpoint Prime handled our free zone license and the translation of every
                contract in under three weeks. Nothing got lost between English and Arabic.&rdquo;
              </p>
              <p className="by">
                Layla Haddad <span className="sep">/</span> Founder, Haddad Consulting
              </p>
            </div>
            <div className="quote reveal">
              <p className="q">
                &ldquo;We refer clients to Bizpoint Prime whenever a translation has to hold up in
                court. Their MOJ certification has never once been questioned.&rdquo;
              </p>
              <p className="by">
                Marco Bellini <span className="sep">/</span> Partner, Bellini &amp; Reyes Law
              </p>
            </div>
            <div className="quote reveal">
              <p className="q">
                &ldquo;Mainland setup, trade licence, and PRO services all moved in parallel
                instead of one after another. That alone saved us a month.&rdquo;
              </p>
              <p className="by">
                Rohan Sethi <span className="sep">/</span> Director, Sethi Freight Holdings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 96, textAlign: "center" }}>
          <p className="kicker reveal">Get Started</p>
          <h2
            className="reveal display"
            style={{
              marginTop: 12,
              maxWidth: "32ch",
              marginLeft: "auto",
              marginRight: "auto",
              fontWeight: 500,
              fontSize: "2.5rem",
              lineHeight: 1.05,
              color: "var(--bg)",
            }}
          >
            Ready to Build Your Business?
          </h2>
          <p
            className="reveal"
            style={{
              marginTop: 16,
              maxWidth: "52ch",
              marginLeft: "auto",
              marginRight: "auto",
              fontSize: "15.5px",
              color: "rgba(250,250,247,.75)",
            }}
          >
            Whether you&rsquo;re launching your first company, expanding your operations, or
            seeking reliable corporate support, Bizpoint Prime Business Solutions LLC is here to
            help. Let us simplify your business journey with professional solutions tailored to
            your success. Prime. Made. Easy.
          </p>
          <div
            className="reveal"
            style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="#contact" className="btn on-brand">
              <span>Request a Free Consultation</span>
            </a>
            <a href="#contact" className="btn outline-light">
              <span>Contact Us Today</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <div className="wrapc" style={padTop96Bottom128}>
          <div className="contact-grid">
            <div className="reveal">
              <h2 className="h-sec">Tell us what you are setting up.</h2>
              <p className="lead">
                Share a few details and a consultant will get back to you within one business day
                with next steps.
              </p>
              <div className="contact-info">
                <div>
                  <span className="dot"></span>Office No: A1-3, Unique Business World, Metha
                  Plaza Building, Block A, Oud Metha, Dubai, UAE
                </div>
                <a href="tel:+971543084251">
                  <span className="dot"></span>+971 54 308 4251
                </a>
                <a href="tel:+971509207769">
                  <span className="dot"></span>+971 50 920 7769
                </a>
                <a href="tel:+97142522092">
                  <span className="dot"></span>+971 4 252 2092 (Landline)
                </a>
                <a href="mailto:bizpointprime@gmail.com">
                  <span className="dot"></span>bizpointprime@gmail.com
                </a>
              </div>
            </div>
            <div className="reveal">
              <form id="contact-form">
                <div className="frow">
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="service">What do you need help with</label>
                  <input id="service" name="service" type="text" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Mainland setup, contract translation, PRO services..."
                  ></textarea>
                </div>
                <button type="submit" className="btn" style={{ alignSelf: "flex-start", marginTop: 8 }}>
                  <span>Book a Consultation</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Desktop-only UI chrome — inert, empty of unique content, until the
          desktop-only script layer activates it. */}
      <div id="cursor" aria-hidden="true">
        <span>View ↗</span>
      </div>
      <div id="jur-preview" aria-hidden="true">
        <img alt="" />
      </div>
    </>
  );
}
