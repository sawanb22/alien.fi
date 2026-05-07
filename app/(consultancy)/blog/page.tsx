import type { Metadata } from "next";
import BlogPageClient from "@/components/consultancy/pages/BlogPageClient";

export const metadata: Metadata = {
  title: "AI Blogs | AI Industry Insights and AI Consulting Blog | alien.fi",
  description:
    "Read alien.fi's ai blogs for practical ai industry insights, implementation lessons, and an ai consulting services blog written by practitioners.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}

