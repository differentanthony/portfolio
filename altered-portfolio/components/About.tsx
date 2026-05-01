import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "#0A0F0A" }}>
      <div className="container-custom">
        <div className="about-grid">
          <ScrollReveal direction="left">
            <div>
              <span className="section-tag">About Altered</span>
              <h2 className="section-heading">
                I've always felt <span className="accent">different.</span>
                <br />
                So I decided to own it.
              </h2>
              <div className="divider-line" />
              <p className="about-p">
                I'm Altered — founder of{" "}
                <span className="em">D-IT Solutions</span>, based in Enugu,
                Nigeria, building for clients here at home and anywhere in the
                world. I've been at this for 3–5 years now, and one thing has
                stayed the same from day one:{" "}
                <span className="em">I don't see websites as just code.</span>{" "}
                Every project is a real problem. And I exist to build the
                solution.
              </p>
              <p className="about-p">
                Before anything gets built, I sit with you. I research your
                industry, study what your competitors are doing right and what
                they're missing. We figure it out together.{" "}
                <span className="em">
                  I build with my clients, not just for them.
                </span>
              </p>
              <p className="about-p">
                Everything I build starts from scratch. No recycled templates, no
                shortcuts. Self-taught and formally trained — I think creatively
                and deliver clean, reliable work.
              </p>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-card">
                <span className="section-tag">AI Philosophy</span>
                <p className="about-p">
                  I don't let AI build for me.{" "}
                  <span className="em">I build with AI.</span> Think of it like
                  having a brilliant partner who thinks differently from you, sees
                  angles you might miss, and has access to things you can't always
                  reach alone.
                </p>
                <blockquote className="about-quote">
                  "Some people say AI makes you dumb. I say it makes you think
                  differently — and see things you never saw before. AI can build
                  a landing page in 5 seconds. Why waste time? Build smarter."
                </blockquote>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="about-card">
                <span className="section-tag">The bigger picture</span>
                <p className="about-p" style={{ marginBottom: 0 }}>
                  Web development is just where I'm starting. The real goal is
                  using technology to tackle what actually matters —{" "}
                  <span className="em">
                    climate, energy, aging, and pushing the limits of what humans
                    can achieve when AI and human intelligence work as one.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
