/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Services | Bizpoint Prime Business Solutions LLC",
  description:
    "Business setup, legal translation, notary, VAT registration, family visas, attestation, PRO services, Golden Visa, branding & marketing, and typing services — all under one roof at Bizpoint Prime Business Solutions LLC.",
};

const services = [
  {
    id: "formation",
    title: "Business Setup",
    image: "https://images.unsplash.com/photo-1574188231145-5f204395d7d5?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Launching a company in the UAE means choosing between mainland, free zone, and offshore structures — each with its own ownership rules, visa quotas, and cost profile. We help you pick the right one and carry it through from trade name to licence issuance.",
    points: ["Trade name reservation & initial approval", "Mainland, Free Zone & Offshore structuring", "Licence issuance and annual renewal"],
  },
  {
    id: "translation",
    title: "Legal Translation",
    image: "https://images.unsplash.com/photo-1695238668015-7bc526956af7?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Contracts, court filings, and certificates need translation that holds up with the authorities that receive them. Our translators are certified to produce documents accepted by UAE Courts, government departments, and embassies.",
    points: ["120+ language pairs", "Ministry of Justice-certified translators", "Accepted by courts, embassies & government authorities"],
  },
  {
    id: "notary",
    title: "Notary Services",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Powers of attorney, affidavits, and corporate agreements often need notarization before they're valid in the UAE. We prepare and notarize these documents so they're recognized by every authority that needs to see them.",
    points: ["Power of Attorney drafting & notarization", "Declarations and affidavits", "Corporate agreement notarization"],
  },
  {
    id: "vat",
    title: "VAT Registration",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Whether you're registering for the first time, amending an existing registration, or need help staying compliant, our team keeps your VAT status accurate and your filings on schedule.",
    points: ["New VAT registration", "Amendments & deregistration", "Ongoing return-filing support"],
  },
  {
    id: "family-visa",
    title: "Family Visa Services",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Bringing family to the UAE involves sponsorship applications, medical and Emirates ID steps, and periodic renewals. We manage the process end to end so nothing falls through the cracks.",
    points: ["Family sponsorship applications", "Residence visa renewals", "Status changes and amendments"],
  },
  {
    id: "attestation",
    title: "Attestation Services",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Educational, commercial, and personal documents often need to be attested before they're valid for use in the UAE or abroad. We coordinate with MOFA, embassies, and the relevant ministries to get it done.",
    points: ["Educational certificate attestation", "Commercial document legalisation", "MOFA & embassy coordination"],
  },
  {
    id: "pro-services",
    title: "PRO Services",
    image: "https://images.unsplash.com/photo-1758519288948-e3c87d2d78d8?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Government paperwork is a constant in the UAE — labour cards, licence renewals, immigration filings. Our PRO team handles the counter visits and follow-ups so your business doesn't have to.",
    points: ["Labour card processing", "Trade licence renewals", "Immigration & visa liaison"],
  },
  {
    id: "golden-visa",
    title: "Golden Visa Services",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "The UAE Golden Visa opens up long-term residency for investors, entrepreneurs, and specialists — but eligibility and documentation requirements vary by category. We assess your case and manage the application from start to finish.",
    points: ["Eligibility assessment", "Document preparation & review", "End-to-end application handling"],
  },
  {
    id: "branding",
    title: "Branding & Marketing",
    image: "https://images.unsplash.com/photo-1423592707957-3b212afa6733?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "A licence gets you open for business — a brand gets you customers. We build identities, run digital marketing campaigns, and design websites that help new and growing businesses stand out.",
    points: ["Brand identity & visual design", "Digital marketing campaigns", "Website design & development"],
  },
  {
    id: "typing",
    title: "Typing Services",
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=1000&q=80&fm=jpg&fit=crop&auto=format",
    body: "Government forms have to be filled exactly to specification, in the format each department expects. Our typing centre prepares official forms, immigration paperwork, and legal filings so they're accepted on the first submission.",
    points: ["Official government form preparation", "Immigration paperwork", "Legal filing & documentation typing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80&fm=jpg&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
        />
        <div className="overlay" aria-hidden="true"></div>
        <div className="wrap inner">
          <p className="kicker reveal" style={{ color: "var(--accent)" }}>
            Services
          </p>
          <h1 className="reveal">Everything your business needs, all in one place.</h1>
          <p className="reveal">
            Business setup, legal translation, government services, visas, VAT, attestation, PRO
            services, and branding — handled by one team, under one roof.
          </p>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 128 }}>
          {services.map((svc, i) => (
            <div className={`svc-row reveal${i % 2 === 1 ? " reverse" : ""}`} id={svc.id} key={svc.id}>
              <div className="svc-row-photo">
                <img src={svc.image} alt={svc.title} />
              </div>
              <div className="svc-row-text">
                <h3>{svc.title}</h3>
                <p>{svc.body}</p>
                <div className="svc-row-list">
                  {svc.points.map((point) => (
                    <div key={point}>
                      <span className="check" aria-hidden="true">✓</span>
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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
            Not sure which service you need?
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
            Tell us what you&rsquo;re working on and we&rsquo;ll point you to the right service —
            or handle the whole thing for you. Prime. Made. Easy.
          </p>
          <div
            className="reveal"
            style={{ marginTop: 32, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="/#contact" className="btn on-brand">
              <span>Request a Free Consultation</span>
            </a>
            <a href="/#contact" className="btn outline-light">
              <span>Contact Us Today</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
