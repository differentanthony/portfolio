import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    name: "Talk",
    description:
      "We start with a conversation — no forms, no briefs yet. Just you telling me what you need, what you want, and where you want to go.",
  },
  {
    number: "02",
    name: "Research",
    description:
      "I study your industry, analyse your competitors, and pull visual inspiration until I have a clear direction. Nothing gets built until the vision is locked.",
  },
  {
    number: "03",
    name: "Strategise",
    description:
      "We map out the full plan together — what to build, what it'll cost, what tools to use, and what success actually looks like for your business.",
  },
  {
    number: "04",
    name: "Design",
    description:
      "Every layout, every colour, every detail — designed from scratch around your brand. I don't use templates. I research, I think, then I create something that's entirely yours.",
  },
  {
    number: "05",
    name: "Build",
    description:
      "This is where the magic happens. Clean code, AI-assisted workflow, and constant communication as your site comes to life.",
  },
  {
    number: "06",
    name: "Test",
    description:
      "We put it through its paces — every screen size, every browser, every click. Nothing ships until it's right.",
  },
  {
    number: "07",
    name: "Ship",
    description:
      "Your site goes live. But I don't disappear — I make sure you're set up, confident, and ready to grow.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section" style={{ background: "#0A0F0A" }}>
      <div className="container-custom">
        <span className="section-tag">How I work</span>
        <div className="section-header">
          <h2 className="section-heading">
            From your idea to a{" "}
            <span className="accent">live, growing website.</span>
          </h2>
          <p className="section-sub">
            Seven steps. No surprises. Just clean, collaborative work.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.number} delay={idx * 0.1} direction="up">
              <div className="process-step">
                <div className="process-num">{step.number}</div>
                <div className="process-name">{step.name}</div>
                <p className="process-desc">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}