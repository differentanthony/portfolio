import { services } from "@/data/services";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  return (
    <section
      id="services"
      className="section"
      style={{ background: "#122212" }}
    >
      <div className="container-custom">
        <span className="section-tag">What I do</span>
        <div className="section-header">
          <h2 className="section-heading">
            Services built around <span className="accent">your growth.</span>
          </h2>
          <p className="section-sub">
            Not a menu of features — a set of real solutions. Here's exactly
            what I bring to the table.
          </p>
        </div>
        <div style={{ borderTop: "1px solid #1E3A1E" }}>
          {services.map((s, idx) => (
            <ScrollReveal key={s.number} delay={idx * 0.08}>
              <div className="service-row">
                <span className="service-num">{s.number}</span>
                <span className="service-title">{s.title}</span>
                <p className="service-desc">{s.description}</p>
                <div className="service-tags">
                  {s.tags.map((tag) => (
                    <span key={tag} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
