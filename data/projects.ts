export type Project = {
  slug: string;
  name: string;
  type: string;
  industry: string;
  description: string;
  stack: string[];
  aiAssisted: boolean;
  result: string;
  url: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "sunvotes",
    name: "SunVotes",
    type: "Business Website",
    industry: "Solar Investment",
    description: "A clean, professional business website for a solar investment company — built to establish credibility and convert visitors into enquiries.",
    stack: ["React", "HTML", "CSS", "Tailwind", "JavaScript"],
    aiAssisted: false,
    result: "Client launched successfully and gained more customers.",
    url: "#",
    year: "2024",
  },
  {
    slug: "hanethical-investment",
    name: "Hanethical Investment",
    type: "Investment Platform",
    industry: "Finance & Investment",
    description: "A full investment platform with user authentication, real-time data, and a clean dashboard experience built for serious investors.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase"],
    aiAssisted: true,
    result: "Successfully launched and serving active users.",
    url: "#",
    year: "2025",
  },
  {
    slug: "big-men-transaction-apparel",
    name: "Big Men Transaction Apparel",
    type: "E-Commerce Store",
    industry: "Fashion & Apparel",
    description: "A production-ready e-commerce store for a fashion brand — complete with Shopify integration, SEO optimization, and a seamless shopping experience.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shopify", "Supabase", "SEO"],
    aiAssisted: true,
    result: "Ongoing — production ready and live.",
    url: "#",
    year: "2025",
  },
  {
    slug: "the-hotel",
    name: "The Hotel",
    type: "Business Website",
    industry: "Hospitality",
    description: "An elegant hotel website designed to showcase rooms, amenities, and drive direct bookings — built with a premium look and feel.",
    stack: ["React", "Tailwind", "CSS", "JavaScript"],
    aiAssisted: false,
    result: "Client launched successfully.",
    url: "#",
    year: "2024",
  },
  {
    slug: "altered-portfolio",
    name: "Altered Portfolio",
    type: "Personal Portfolio",
    industry: "Personal Brand",
    description: "The very site you're on. Built with Next.js 14, AI-assisted workflow, and every design decision made intentionally — dark, earthy, and different.",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Framer Motion"],
    aiAssisted: true,
    result: "Live personal brand & portfolio.",
    url: "#",
    year: "2026",
  },
];
