/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blogs | Bizpoint Prime Business Solutions LLC",
  description:
    "Insights on business setup, legal translation, VAT, and compliance for companies operating in the UAE — from Bizpoint Prime Business Solutions LLC.",
};

const posts = [
  {
    image: "https://images.unsplash.com/photo-1768069794826-a31af289449f?w=1200&q=80&fm=jpg&fit=crop&auto=format",
    category: "Tax & Compliance",
    date: "June 2026",
    read: "7 min read",
    title: "UAE Corporate Tax: What New Businesses Need to Register For",
    excerpt:
      "A practical breakdown of registration deadlines, exemptions, and what free zone entities specifically need to file in their first year.",
  },
  {
    image: "https://images.unsplash.com/photo-1523270918669-1fd17ac1742d?w=900&q=80&fm=jpg&fit=crop&auto=format",
    category: "Business Setup",
    date: "May 2026",
    read: "5 min read",
    title: "Mainland or Free Zone: How to Choose the Right Licence",
    excerpt:
      "Ownership rules, visa quotas, and cost differences that actually decide the right structure for your business.",
  },
  {
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=900&q=80&fm=jpg&fit=crop&auto=format",
    category: "Legal Translation",
    date: "April 2026",
    read: "4 min read",
    title: "Why Court-Ready Translation Is Different From Standard Translation",
    excerpt:
      "What MOJ certification actually checks for, and why an uncertified translation gets rejected at the counter.",
  },
];

const [featured, ...rest] = posts;

export default function BlogsPage() {
  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fm=jpg&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
        />
        <div className="overlay" aria-hidden="true"></div>
        <div className="wrap inner">
          <p className="kicker reveal" style={{ color: "var(--accent)" }}>
            Blogs
          </p>
          <h1 className="reveal">Insights for businesses setting up in Dubai.</h1>
          <p className="reveal">
            Practical guidance on business setup, legal translation, VAT, and compliance — from
            the Bizpoint Prime team.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 64 }}>
          <p className="kicker reveal">Latest</p>
          <article className="svc-row reveal" style={{ marginTop: 24 }}>
            <div className="svc-row-photo">
              <img src={featured.image} alt="" />
            </div>
            <div className="svc-row-text">
              <span className="tag">{featured.category}</span>
              <p className="meta" style={{ marginTop: 12 }}>
                {featured.date} <span className="sep">/</span> {featured.read}
              </p>
              <h3 style={{ marginTop: 10 }}>{featured.title}</h3>
              <p>{featured.excerpt}</p>
            </div>
          </article>
        </div>
      </section>

      {/* MORE POSTS */}
      <section style={{ background: "var(--bg-raised)" }}>
        <div className="wrapc" style={{ paddingTop: 80, paddingBottom: 128 }}>
          <p className="kicker reveal">More insights</p>
          <div className="post-grid">
            {rest.map((post) => (
              <article className="post-card reveal" key={post.title}>
                <div className="img">
                  <img src={post.image} alt="" />
                </div>
                <span className="tag" style={{ marginTop: 16 }}>
                  {post.category}
                </span>
                <p className="meta" style={{ marginTop: 12 }}>
                  {post.date} <span className="sep">/</span> {post.read}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
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
            Have a question these posts didn&rsquo;t answer?
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
            Tell us what you&rsquo;re working on and a consultant will walk you through it
            directly. Prime. Made. Easy.
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
