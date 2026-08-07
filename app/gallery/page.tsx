/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getGalleryImages, getMediaUrl } from "../lib/payload";

export const metadata: Metadata = {
  title: "Gallery | Bizpoint Prime Business Solutions LLC",
  description:
    "A look inside Bizpoint Prime Business Solutions LLC — our team, our office, and the work we do for businesses across the UAE.",
};

export default async function GalleryPage() {
  const images = await getGalleryImages();

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero">
        <img
          className="bg"
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&fm=jpg&fit=crop&auto=format"
          alt=""
          aria-hidden="true"
        />
        <div className="overlay" aria-hidden="true"></div>
        <div className="wrap inner">
          <p className="kicker reveal" style={{ color: "var(--accent)" }}>
            Gallery
          </p>
          <h1 className="reveal">A look inside Bizpoint Prime.</h1>
          <p className="reveal">Our team, our office, and the work we do for clients across the UAE.</p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section>
        <div className="wrapc" style={{ paddingTop: 96, paddingBottom: 128 }}>
          {images.length > 0 ? (
            <div className="gallery-grid">
              {images.map((item) => (
                <div className="gallery-item reveal" key={item.id}>
                  <img
                    src={getMediaUrl(item.image)}
                    alt={item.caption || "Bizpoint Prime gallery"}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="reveal" style={{ color: "var(--fg-muted)" }}>
              Gallery photos are being prepared. Check back soon.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
