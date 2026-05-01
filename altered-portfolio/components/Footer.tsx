import { GitFork } from "lucide-react";

const navLinks = [
  "About",
  "Services",
  "Skills",
  "Projects",
  "Process",
  "Contact",
];
const serviceLinks = [
  "Web Development",
  "AI-Assisted Builds",
  "E-Commerce",
  "Strategy & Consulting",
  "SEO & Visibility",
  "Website Redesign",
];
const socials = [
  { label: "TT", href: "#", title: "TikTok" },
  { label: "IG", href: "#", title: "Instagram" },
  { label: "𝕏", href: "#", title: "Twitter / X" },
  { label: "in", href: "#", title: "LinkedIn" },
  { label: "GH", href: "#", title: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#122212", borderTop: "1px solid #1E3A1E" }}>
      <div
        className="container-custom"
        style={{ paddingTop: "3.5rem", paddingBottom: "2rem" }}
      >
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              Altered<span>.</span>
            </div>
            <p className="footer-bio">
              Web developer & AI collaborator based in Enugu, Nigeria. Building
              smarter websites for businesses ready to grow — locally and
              globally.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  aria-label={s.title}
                  className="social-btn"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`}>
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <div className="footer-links">
              {serviceLinks.map((s) => (
                <a key={s} href="#services">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Altered — D-IT Solutions. All rights reserved.
          </span>
          <span className="footer-built">Built with Next.js + AI</span>
        </div>
      </div>
    </footer>
  );
}
