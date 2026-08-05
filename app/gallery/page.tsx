/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Bizpoint Prime Business Solutions LLC",
  description:
    "A look inside Bizpoint Prime Business Solutions LLC — our team, our office, and the work we do for businesses across the UAE.",
};

const photoIds = [
  "photo-1454165804606-c3d57bc86b40",
  "photo-1450101499163-c8848c66ca85",
  "photo-1521791136064-7986c2920216",
  "photo-1589829545856-d10d557cf95f",
  "photo-1507842217343-583bb7270b66",
  "photo-1423592707957-3b212afa6733",
  "photo-1521737604893-d14cc237f11d",
  "photo-1600880292089-90a7e086ee0c",
];

export default function GalleryPage() {
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
          <div className="gallery-grid">
            {photoIds.map((id, i) => (
              <div className="gallery-item reveal" key={i}>
                <img src={`https://images.unsplash.com/${id}?w=700&q=80&fm=jpg&fit=crop&auto=format`} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
