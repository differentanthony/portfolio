export type Service = {
  number: string;
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Custom websites built from scratch — no templates, no shortcuts. Landing pages, business sites, and full web experiences designed to represent your brand and convert your visitors into customers.",
    tags: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    number: "02",
    title: "AI-Assisted Builds",
    description: "I don't just use AI — I collaborate with it. Every project benefits from an AI-powered workflow that delivers faster, sharper results without cutting corners on quality. Smarter process, better output.",
    tags: ["AI-powered", "Faster delivery", "Cleaner code"],
  },
  {
    number: "03",
    title: "E-Commerce Development",
    description: "Full online stores with seamless checkout experiences. I integrate Nigerian payment gateways like Paystack and Flutterwave, WhatsApp ordering, and Shopify — so your customers can buy the way they want to.",
    tags: ["Shopify", "Paystack", "Flutterwave", "WhatsApp"],
  },
  {
    number: "04",
    title: "Strategy & Consultation",
    description: "Before we build anything, we think. I research your market, study your competitors, and map out a clear direction — what to build, what it'll cost, and how to position your business to stand out. No guesswork.",
    tags: ["Competitor research", "Market positioning", "Cost planning"],
  },
  {
    number: "05",
    title: "SEO & Web Visibility",
    description: "A beautiful site no one finds is a missed opportunity. I build with SEO in mind from day one — clean structure, fast load times, and the right signals to help Google find and rank your business.",
    tags: ["On-page SEO", "Performance", "Google visibility"],
  },
  {
    number: "06",
    title: "Backend & Database Integration",
    description: "When your project needs more than a front-end — user authentication, databases, real-time data — I handle the full stack. Clean, scalable architecture that grows with your business.",
    tags: ["Supabase", "APIs", "Auth", "Full-stack"],
  },
  {
    number: "07",
    title: "Website Redesign & Rebuild",
    description: "Already have a site but it's not doing your brand justice? I'll redesign and rebuild it from scratch — same business, completely new identity. Better look, better feel, better results.",
    tags: ["Redesign", "Rebuild", "Brand refresh"],
  },
];
