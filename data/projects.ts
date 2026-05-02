export type Project = {
  slug: string;
  name: string;
  type: string;
  industry: string;
  description: string;
  stack: string[];
  aiAssisted: boolean;
  result: string;
  thumbnail: string;
  url?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "first-investment",
    name: "First Investment Platform",
    type: "Investment Platform",
    industry: "Finance & Investment",
    description: "A full investment platform where users invest in energy, stocks, crypto, real estate, and forex. Features user authentication, crypto and fiat payment processing, admin dashboard, automated capital and returns payout at period expiry, email notifications, and security hardening throughout.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "Flutterwave", "Crypto Payments", "Admin Dashboard", "Email Notifications", "REST APIs"],
    aiAssisted: true,
    result: "Live and serving active investors.",
    thumbnail: "/images/first.png",
    year: "2025",
  },
  {
    slug: "big-men-transaction-apparel",
    name: "Big Men Transaction Apparel",
    type: "E-Commerce Store",
    industry: "Fashion & Apparel",
    description: "A production-ready men's clothing store covering everything from trousers and shoes to caps and underwear. Built with Shopify integration, fiat and crypto payment options, admin order management, client content management, email notifications, and SEO optimization.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shopify", "Flutterwave", "Crypto Payments", "Supabase", "CMS", "Admin Dashboard", "SEO"],
    aiAssisted: true,
    result: "Ongoing — production ready and live.",
    thumbnail: "/images/bmt.png",
    year: "2025",
  },
  {
    slug: "the-hotel",
    name: "The Hotel",
    type: "Business Website",
    industry: "Hospitality",
    description: "An elegant hotel website with room showcasing, amenities display, and direct booking functionality. Includes Flutterwave payment integration, booking confirmation emails, admin reservation management, client content management, and security best practices.",
    stack: ["React", "Tailwind", "JavaScript", "Flutterwave", "Admin Dashboard", "CMS", "Email Notifications", "REST APIs"],
    aiAssisted: false,
    result: "Client launched successfully.",
    thumbnail: "/images/hotel.png",
    year: "2024",
  },
  {
    slug: "agripure",
    name: "AgriPure",
    type: "E-Commerce Store",
    industry: "Food & Agriculture",
    description: "A farm-to-table e-commerce platform where users buy fresh fruits, vegetables, and food straight from the farm. Features Flutterwave payment processing, order tracking, admin inventory management, client content management, email notifications, and secure checkout.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Flutterwave", "Admin Dashboard", "CMS", "Email Notifications", "SEO"],
    aiAssisted: true,
    result: "Live and serving customers.",
    thumbnail: "/images/agripure.png",
    year: "2025",
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
    thumbnail: "/images/altered-portfolio.png",
    year: "2026",
  },
];