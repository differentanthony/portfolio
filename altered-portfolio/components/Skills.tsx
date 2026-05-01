"use client";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    name: "Frontend",
    level: "Advanced",
    levelColor: "#4A7C4A",
    skills: [
      { label: "HTML & CSS", depth: null },
      { label: "JavaScript", depth: null },
      { label: "TypeScript", depth: null },
      { label: "React", depth: null },
      {
        label: "Next.js",
        depth: [
          "App Router",
          "SSR & SSG",
          "API Routes",
          "Dynamic Routing",
          "Middleware",
        ],
      },
      { label: "Tailwind CSS", depth: null },
      { label: "Framer Motion", depth: null },
      { label: "Responsive Design", depth: null },
    ],
  },
  {
    name: "Backend & Database",
    level: "Confident",
    levelColor: "#2D5A2D",
    skills: [
      {
        label: "Supabase",
        depth: [
          "SQL & Queries",
          "Edge Functions",
          "Cron Jobs",
          "Migrations",
          "Auth & Users",
          "Real-time",
          "Storage",
          "Error Logs",
        ],
      },
      { label: "Auth & User Mgmt", depth: null },
      { label: "REST APIs", depth: null },
      { label: "Third-party APIs", depth: null },
      { label: "Real-time Subs", depth: null },
      { label: "Migrations", depth: null },
    ],
  },
  {
    name: "E-Commerce & Payments",
    level: "Comfortable",
    levelColor: "#C8D8C0",
    skills: [
      { label: "Shopify", depth: null },
      { label: "Paystack", depth: null },
      { label: "Flutterwave", depth: null },
      { label: "WhatsApp Integration", depth: null },
      { label: "Cart & Checkout", depth: null },
      { label: "Product Mgmt", depth: null },
      { label: "Order Tracking", depth: null },
    ],
  },
  {
    name: "AI & Workflow",
    level: "Advanced",
    levelColor: "#4A7C4A",
    skills: [
      { label: "Claude AI", depth: null },
      { label: "ChatGPT", depth: null },
      { label: "Gemini", depth: null },
      { label: "Cursor", depth: null },
      { label: "Bolt", depth: null },
      { label: "Prompt Engineering", depth: null },
      { label: "AI UI Building", depth: null },
      { label: "AI Debugging", depth: null },
    ],
  },
  {
    name: "SEO & Performance",
    level: "Confident",
    levelColor: "#2D5A2D",
    skills: [
      { label: "On-page SEO", depth: null },
      { label: "Technical SEO", depth: null },
      { label: "Google Search Console", depth: null },
      { label: "Performance Optimization", depth: null },
      { label: "Meta & OG Tags", depth: null },
      { label: "Lighthouse Audits", depth: null },
    ],
  },
  {
    name: "Dev Tools",
    level: "Confident",
    levelColor: "#2D5A2D",
    skills: [
      { label: "Git & GitHub", depth: null },
      { label: "VS Code", depth: null },
      { label: "Vercel", depth: null },
      { label: "npm / yarn", depth: null },
      { label: "Linux & Terminal", depth: null },
      { label: "Chrome DevTools", depth: null },
      { label: "Supabase Dashboard", depth: null },
    ],
  },
];

export default function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="skills" className="section" style={{ background: "#0A0F0A" }}>
      <div className="container-custom">
        <span className="section-tag">What I bring</span>
        <div className="section-header">
          <h2 className="section-heading">
            Skills for every <span className="accent">layer.</span>
          </h2>
          <p className="section-sub">
            Hover the highlighted chips to see the depth behind the label.
          </p>
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <ScrollReveal key={cat.name} delay={idx * 0.1}>
              <div className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-cat">{cat.name}</span>
                  <span
                    className="skill-level"
                    style={{
                      color: cat.levelColor,
                      borderColor: cat.levelColor,
                    }}
                  >
                    {cat.level}
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    background: "#1E3A1E",
                  }}
                />
                <div className="skill-chips">
                  {cat.skills.map((skill) => {
                    const id = `${cat.name}-${skill.label}`;
                    return (
                      <div key={skill.label} style={{ position: "relative" }}>
                        <span
                          className={`chip ${skill.depth ? "deep" : ""}`}
                          onMouseEnter={() => skill.depth && setHovered(id)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          {skill.label}
                          {skill.depth && hovered === id && (
                            <div className="chip-tooltip">
                              <div className="chip-tooltip-title">Depth</div>
                              <div className="chip-tooltip-items">
                                {skill.depth.map((d) => (
                                  <span key={d} className="chip-tooltip-item">
                                    {d}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
