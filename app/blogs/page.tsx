import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { formatPostDate, getBlogPosts, getMediaUrl } from "../lib/payload";

export const metadata: Metadata = {
  title: "Blogs | Bizpoint Prime Business Solutions LLC",
  description:
    "Insights on business setup, legal translation, VAT, and compliance for companies operating in the UAE — from Bizpoint Prime Business Solutions LLC.",
};

export default async function BlogsPage() {
  const posts = await getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <Image
          className="bg"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fm=jpg&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          priority
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

      {featured ? (
        <section>
          <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 64 }}>
            <p className="kicker reveal">Latest</p>
            <Link href={`/blogs/${featured.slug}`} className="svc-row reveal" style={{ marginTop: 24 }}>
              <div className="svc-row-photo">
                <Image
                  src={getMediaUrl(featured.featuredImage)}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                />
              </div>
              <div className="svc-row-text">
                <span className="tag">{featured.category}</span>
                <p className="meta" style={{ marginTop: 12 }}>
                  {formatPostDate(featured.publishedDate)}
                  {featured.readTime ? (
                    <>
                      {" "}
                      <span className="sep">/</span> {featured.readTime}
                    </>
                  ) : null}
                </p>
                <h3 style={{ marginTop: 10 }}>{featured.title}</h3>
                <p>{featured.excerpt}</p>
              </div>
            </Link>
          </div>
        </section>
      ) : (
        <section>
          <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 64 }}>
            <p className="reveal" style={{ color: "var(--fg-muted)" }}>
              New insights are on the way. Check back soon.
            </p>
          </div>
        </section>
      )}

      {rest.length > 0 ? (
        <section style={{ background: "var(--bg-raised)" }}>
          <div className="wrapc" style={{ paddingTop: 80, paddingBottom: 128 }}>
            <p className="kicker reveal">More insights</p>
            <div className="post-grid">
              {rest.map((post) => (
                <Link className="post-card reveal" href={`/blogs/${post.slug}`} key={post.id}>
                  <div className="img">
                    <Image
                      src={getMediaUrl(post.featuredImage)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 700px) 100vw, 33vw"
                    />
                  </div>
                  <span className="tag" style={{ marginTop: 16 }}>
                    {post.category}
                  </span>
                  <p className="meta" style={{ marginTop: 12 }}>
                    {formatPostDate(post.publishedDate)}
                    {post.readTime ? (
                      <>
                        {" "}
                        <span className="sep">/</span> {post.readTime}
                      </>
                    ) : null}
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

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
