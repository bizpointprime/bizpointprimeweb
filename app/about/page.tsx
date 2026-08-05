/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About Us | Bizpoint Prime Business Solutions LLC",
  description:
    "Bizpoint Prime Business Solutions LLC — our vision, mission, core values, and why businesses across the UAE trust us as their one-stop corporate solutions partner. Prime. Made. Easy.",
};

const coreValues = [
  {
    title: "Integrity",
    body: "We conduct every service with honesty, transparency, and professionalism, building relationships based on trust.",
  },
  {
    title: "Client First",
    body: "Our clients are at the heart of everything we do. We listen, understand their needs, and deliver solutions tailored to their goals.",
  },
  {
    title: "Excellence",
    body: "We are committed to providing high-quality services with precision, efficiency, and attention to detail.",
  },
  {
    title: "Reliability",
    body: "Our clients can depend on us for timely support, accurate documentation, and consistent service throughout every stage of their business journey.",
  },
  {
    title: "Innovation",
    body: "We continuously improve our services and embrace modern solutions that help businesses operate more efficiently and grow successfully.",
  },
];

const whyChoose = [
  {
    title: "Complete Business Solutions Under One Roof",
    body: "From company formation and licensing to legal documentation, visas, PRO services, compliance, branding, and marketing — we handle it all.",
  },
  {
    title: "Save Time & Reduce Costs",
    body: "Our streamlined processes help eliminate delays, reduce unnecessary expenses, and make every step more efficient.",
  },
  {
    title: "Experienced Corporate Consultants",
    body: "Our knowledgeable team provides expert guidance tailored to your unique business requirements.",
  },
  {
    title: "End-to-End Government Support",
    body: "We coordinate with relevant government authorities to ensure smooth processing and full compliance.",
  },
  {
    title: "Personalized Service",
    body: "Every business is different. We provide practical solutions designed around your goals and long-term success.",
  },
  {
    title: "Supporting Your Business Beyond Setup",
    body: "Our commitment doesn't end with company formation. We continue supporting your business with ongoing PRO services, compliance, branding, and digital marketing to help you grow with confidence.",
  },
];

const team = [
  { name: "Umarul Farook", role: "Business Development Manager", img: "/assets/team/umarul-farook.jpg" },
  { name: "Abdul Sanad", role: "Operation Manager", img: "/assets/team/abdul-sanad.jpg" },
  { name: "Meera Krishna K", role: "Digital Marketing Specialist", img: "/assets/team/meera-krishna.jpg" },
  { name: "Ali Afaq", role: "Typist", img: "/assets/team/ali-afaq.jpg" },
  { name: "Abdul Samed Murshid", role: "Translator", img: "/assets/team/abdul-samed-murshid.jpg" },
];

const num = (i: number) => String(i + 1).padStart(2, "0");

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&fm=jpg&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
        />
        <div className="overlay" aria-hidden="true"></div>
        <div className="wrap inner">
          <p className="kicker reveal" style={{ color: "var(--accent)" }}>
            About Us
          </p>
          <h1 className="reveal">Smart Business Starts Here.</h1>
          <p className="reveal">
            At Bizpoint Prime Business Solutions LLC, we believe running a business should be
            about building your vision — not spending valuable time managing paperwork, government
            procedures, and administrative tasks.
          </p>
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

      {/* INTRO */}
      <section style={{ background: "var(--bg-raised)" }}>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 112 }}>
          <div className="why-layout">
            <div className="why-photo reveal">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&q=80&fm=jpg&fit=crop&auto=format"
                alt="Bizpoint Prime consultants at work"
              />
            </div>
            <div>
              <p
                className="reveal"
                style={{ fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
              >
                That&rsquo;s why we provide complete business and corporate solutions under one
                roof, helping individuals, entrepreneurs, startups, SMEs, and established companies
                navigate every stage of their business journey in the UAE.
              </p>
              <p
                className="reveal"
                style={{ marginTop: 20, fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
              >
                From business setup and company licensing to legal translation, notary services,
                visas, VAT registration, document attestation, PRO services, branding, and digital
                marketing, our experienced team takes care of the essential support services that
                keep your business moving forward.
              </p>
              <p
                className="reveal"
                style={{ marginTop: 20, fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
              >
                We simplify complex processes, ensure compliance, and deliver reliable solutions
                that save you time, reduce unnecessary costs, and allow you to focus on what truly
                matters — growing your business.
              </p>
              <p className="reveal h-sec" style={{ marginTop: 24 }}>
                Prime. Made. Easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 112 }}>
          <p className="kicker reveal">What drives us</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "44ch" }}>
            Vision &amp; Mission
          </h2>
          <div className="vm-grid">
            <div className="vm-card reveal">
              <span className="value-num">01</span>
              <h3>Our Vision</h3>
              <p>
                To become the UAE&rsquo;s most trusted one-stop business solutions partner by
                providing every essential corporate service under one roof.
              </p>
              <p style={{ marginTop: 14 }}>
                We envision a future where businesses and individuals no longer need to worry
                about licensing, government approvals, legal documentation, PRO services, visas,
                compliance, or administrative processes. Instead, they can focus entirely on
                growing their business, serving their customers, and achieving long-term success.
              </p>
              <p style={{ marginTop: 14 }}>
                By combining business setup, corporate support, branding, and digital marketing,
                we aim to become a trusted extension of every client&rsquo;s business — supporting
                them from the first step to continued growth.
              </p>
            </div>
            <div className="vm-card reveal">
              <span className="value-num">02</span>
              <h3>Our Mission</h3>
              <p>
                Our mission is to simplify the business journey by delivering reliable,
                transparent, and efficient corporate solutions that save our clients time, reduce
                unnecessary costs, and eliminate administrative complexity.
              </p>
              <p style={{ marginTop: 14 }}>
                We are committed to providing end-to-end support through business setup,
                licensing, legal translation, notary services, PRO services, visa solutions, VAT
                registration, document attestation, branding, and digital marketing.
              </p>
              <p style={{ marginTop: 14 }}>
                By handling the behind-the-scenes work, we enable our clients to focus on
                innovation, business growth, and achieving their goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ background: "var(--bg-raised)" }}>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 112 }}>
          <p className="kicker reveal">Our Core Values</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "52ch" }}>
            The principles behind every engagement.
          </h2>
          <div className="values-grid">
            {coreValues.map((v, i) => (
              <div className="value-card reveal" key={v.title}>
                <span className="value-num">{num(i)}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BIZPOINT PRIME */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 128 }}>
          <p className="kicker reveal">Why Bizpoint Prime</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "56ch" }}>
            Why Choose Bizpoint Prime?
          </h2>
          <p
            className="reveal"
            style={{ marginTop: 20, maxWidth: "70ch", fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
          >
            Choosing the right business partner can make all the difference. At Bizpoint Prime, we
            go beyond processing documents — we become your trusted corporate support partner,
            managing the essential backend operations so you can focus on running and growing your
            business.
          </p>
          <div className="values-grid cols-3">
            {whyChoose.map((v, i) => (
              <div className="value-card reveal" key={v.title}>
                <span className="value-num">{num(i)}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="team" style={{ background: "var(--bg-raised)" }}>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 112 }}>
          <p className="kicker reveal">Our Team</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "52ch" }}>
            The people behind Bizpoint Prime.
          </h2>
          <div className="team-grid">
            {team.map((member) => (
              <div className="member reveal" key={member.name}>
                <div className="ph">
                  <img src={member.img} alt={member.name} />
                </div>
                <p className="nm">{member.name}</p>
                <p className="ro">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 96 }}>
          <p className="kicker reveal">Our Commitment</p>
          <h2 className="h-sec reveal" style={{ marginTop: 12, maxWidth: "48ch" }}>
            More than just a service provider.
          </h2>
          <p
            className="reveal"
            style={{ marginTop: 20, maxWidth: "70ch", fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
          >
            At Bizpoint Prime Business Solutions LLC, we are committed to becoming more than just a
            service provider — we strive to be a trusted partner in your business journey.
          </p>
          <p
            className="reveal"
            style={{ marginTop: 20, maxWidth: "70ch", fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
          >
            We understand that your time is valuable. That&rsquo;s why we manage the paperwork,
            approvals, documentation, compliance, and corporate support behind the scenes, allowing
            you to focus on building your business, serving your customers, and creating new
            opportunities.
          </p>
          <p
            className="reveal"
            style={{ marginTop: 20, maxWidth: "70ch", fontSize: "15.5px", lineHeight: 1.6, color: "var(--fg-muted)" }}
          >
            Whether you&rsquo;re launching a startup, expanding an established company, or looking
            for reliable corporate support, our team is here to simplify every step with
            professional expertise and personalized service.
          </p>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="manifesto">
        <div className="wrap">
          <p>
            Prime. Made. Easy. <em>Together, We Make It Happen.</em>
          </p>
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
            Ready to Grow Your Business?
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
            Whether you&rsquo;re starting a new venture, expanding your operations, or looking for
            dependable corporate support, Bizpoint Prime Business Solutions LLC is here to help.
            Let us take care of the business essentials while you focus on what matters
            most — growing your business.
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
