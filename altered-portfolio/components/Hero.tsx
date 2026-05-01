"use client";
import { useEffect, useState } from "react";

const words = ["growth.", "results.", "impact.", "the future."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="dot-grid hero" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(10,15,10,0.5), transparent, #0A0F0A)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "8rem",
          right: 0,
          width: "1px",
          height: "14rem",
          background:
            "linear-gradient(to bottom, transparent, #2D5A2D, transparent)",
        }}
      />

      <div
        className="container-custom"
        style={{ position: "relative", zIndex: 1 }}
      >
        <span className="section-tag">Altered — D-IT Solutions</span>
        <h1 className="hero-headline">
          I don't just build sites.
          <br />I build{" "}
          <span
            className="accent"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(8px)",
              display: "inline-block",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {words[wordIndex]}
          </span>
        </h1>
        <p className="hero-sub">
          Web developer + AI. The combination that gets your business online
          faster, smarter, and ready to scale — from Nigeria to the world.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            See My Work
          </a>
          <a href="#contact" className="btn-outline">
            Let's Work Together
          </a>
        </div>
        <div className="hero-stats">
          {[
            { val: "3–5", label: "Years building" },
            { val: "5+", label: "Projects shipped" },
            { val: "2+", label: "Countries served" },
            { val: "∞", label: "Problems to solve" },
          ].map((s) => (
            <div key={s.label}>
              <div className="stat-val">{s.val}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
