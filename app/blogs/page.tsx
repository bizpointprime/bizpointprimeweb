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
    image: "https://images.unsplash.com/photo-1768069794826-a31af289449f?w=900&q=80&fm=jpg&fit=crop&auto=format",
    date: "June 2026",
    read: "7 min read",
    title: "UAE Corporate Tax: What New Businesses Need to Register For",
    excerpt:
      "A practical breakdown of registration deadlines, exemptions, and what free zone entities specifically need to file in their first year.",
  },
  {
    image: "https://images.unsplash.com/photo-1523270918669-1fd17ac1742d?w=900&q=80&fm=jpg&fit=crop&auto=format",
    date: "May 2026",
    read: "5 min read",
    title: "Mainland or Free Zone: How to Choose the Right Licence",
    excerpt:
      "Ownership rules, visa quotas, and cost differences that actually decide the right structure for your business.",
  },
  {
    image: "https://images.unsplash.com/photo-1664575262619-b28fef7a40a4?w=900&q=80&fm=jpg&fit=crop&auto=format",
    date: "April 2026",
    read: "4 min read",
    title: "Why Court-Ready Translation Is Different From Standard Translation",
    excerpt:
      "What MOJ certification actually checks for, and why an uncertified translation gets rejected at the counter.",
  },
];

export default function BlogsPage() {
  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/photo-1523270918669-1fd17ac1742d?w=1920&q=80&fm=jpg&fit=crop&auto=format"
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

      {/* POST GRID */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 128 }}>
          <div className="post-grid">
            {posts.map((post) => (
              <article className="post-card reveal" key={post.title}>
                <div className="img">
                  <img src={post.image} alt="" />
                </div>
                <p className="meta">
                  {post.date} <span className="sep">/</span> {post.read}
                </p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
