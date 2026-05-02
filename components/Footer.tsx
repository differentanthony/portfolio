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
  {
    label: "TT",
    href: "https://www.tiktok.com/@d_techsolutions",
    title: "TikTok",
  },
  { label: "IG", href: "#", title: "Instagram" },
  { label: "𝕏", href: "https://x.com/D_TECHSOLUTIONZ", title: "Twitter / X" },
  { label: "GH", href: "https://github.com/differentanthony", title: "GitHub" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0F0A", borderTop: "1px solid #1E3A1E" }}>
      <div
        className="container-custom"
        style={{ paddingTop: "4rem", paddingBottom: "2rem" }}
      >
        <div className="footer-grid">
          {/* Brand col */}
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
                  title={s.title}
                  className="social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Nav col */}
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

          {/* Services col */}
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

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, #2D5A2D, transparent)",
            margin: "2rem 0",
          }}
        />

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2026 Altered — D-IT Solutions. All rights reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#2D5A2D",
                display: "inline-block",
              }}
            />
            <span className="footer-built">Built with Next.js + AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
