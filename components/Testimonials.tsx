import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Investment Platform Client",
    role: "Founder",
    quote:
      "I gave him a test to see what he was capable of. He did not just meet the brief, he went beyond it and genuinely surprised me. I was not expecting that level.",
    initial: "F",
  },
  {
    name: "Business Website Client",
    role: "Business Owner",
    quote:
      "He took the time to understand the actual problem I was facing, not just what I asked for. The result showed that. It was not just a website, it was a real solution.",
    initial: "B",
  },
  {
    name: "E-Commerce Client",
    role: "Store Owner",
    quote:
      "My customers can now shop online without getting lost or confused. He kept everything simple and clean, exactly the way I wanted it. My clients are happy and so am I.",
    initial: "S",
  },
  {
    name: "Web Project Client",
    role: "Entrepreneur",
    quote:
      "I keep telling people he built me a billion dollar website. I am not joking. It looks and feels like something that cost ten times what I actually paid.",
    initial: "E",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "#122212" }}
    >
      <div className="container-custom">
        <span className="section-tag">Client words</span>
        <h2 className="section-heading" style={{ marginBottom: "2.5rem" }}>
          Don't take my word <span className="accent">for it.</span>
        </h2>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="testi-card">
                <div
                  style={{
                    fontSize: "3rem",
                    color: "#2D5A2D",
                    fontFamily: "Georgia,serif",
                    lineHeight: 1,
                  }}
                >
                  &quot;
                </div>
                <p
                  style={{
                    color: "#C8D8C0",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    flex: 1,
                    fontSize: "0.9rem",
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    borderTop: "1px solid #1E3A1E",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "2.25rem",
                      height: "2.25rem",
                      background: "#1E3A1E",
                      border: "1px solid #2D5A2D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      color: "#4A7C4A",
                      flexShrink: 0,
                    }}
                  >
                    {t.initial}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "#E8F0E0",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "DM Mono,monospace",
                        fontSize: "0.6rem",
                        color: "#C8D8C0",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}