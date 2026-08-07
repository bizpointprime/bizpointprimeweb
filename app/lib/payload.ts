const PAYLOAD_URL = (process.env.PAYLOAD_URL || "http://localhost:3000").replace(/\/$/, "");

export type PayloadMedia = {
  id: string;
  alt?: string | null;
  url?: string | null;
  width?: number | null;
  height?: number | null;
};

export type LexicalContent = {
  root: {
    type: string;
    children: LexicalNode[];
    direction: ("ltr" | "rtl") | null;
    format: string;
    indent: number;
    version: number;
  };
};

export type LexicalNode = {
  type: string;
  version?: number;
  children?: LexicalNode[];
  text?: string;
  format?: number | string;
  tag?: string;
  listType?: string;
  url?: string;
  fields?: {
    url?: string;
    newTab?: boolean;
    linkType?: string;
    [key: string]: unknown;
  };
  [key: string]: unknown;
};

export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: LexicalContent;
  category: string;
  featuredImage: string | PayloadMedia;
  readTime?: string | null;
  publishedDate: string;
  status: "draft" | "published";
  seoTitle?: string | null;
  seoDescription?: string | null;
};

export type GalleryImage = {
  id: string;
  image: string | PayloadMedia;
  caption?: string | null;
  category?: string | null;
  order?: number | null;
  published?: boolean | null;
};

type PayloadListResponse<T> = {
  docs: T[];
  totalDocs: number;
};

function mediaUrl(media: string | PayloadMedia | null | undefined): string {
  if (!media) return "";
  if (typeof media === "string") return media;
  if (!media.url) return "";
  if (media.url.startsWith("http")) return media.url;
  return `${PAYLOAD_URL}${media.url}`;
}

export function getMediaUrl(media: string | PayloadMedia | null | undefined): string {
  return mediaUrl(media);
}

export function formatPostDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

async function payloadFetch<T>(path: string, tags: string[]): Promise<T> {
  const res = await fetch(`${PAYLOAD_URL}${path}`, {
    next: { tags, revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`Payload request failed (${res.status}): ${path}`);
  }

  return res.json() as Promise<T>;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await payloadFetch<PayloadListResponse<BlogPost>>(
      "/api/blog-posts?where[status][equals]=published&sort=-publishedDate&depth=1&limit=100",
      ["blogs"],
    );
    return data.docs;
  } catch (err) {
    console.error("Failed to fetch blog posts from Payload", err);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const data = await payloadFetch<PayloadListResponse<BlogPost>>(
      `/api/blog-posts?where[slug][equals]=${encodeURIComponent(slug)}&where[status][equals]=published&depth=1&limit=1`,
      ["blogs", `blog-${slug}`],
    );
    return data.docs[0] ?? null;
  } catch (err) {
    console.error(`Failed to fetch blog post "${slug}" from Payload`, err);
    return null;
  }
}

export async function getGalleryImages(): Promise<GalleryImage[]> {
  try {
    const data = await payloadFetch<PayloadListResponse<GalleryImage>>(
      "/api/gallery-images?where[published][equals]=true&sort=order&depth=1&limit=100",
      ["gallery"],
    );
    return data.docs;
  } catch (err) {
    console.error("Failed to fetch gallery images from Payload", err);
    return [];
  }
}
