import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "#122212" }}
    >
      <div className="container-custom">
        <span className="section-tag">Featured work</span>
        <div className="section-header">
          <h2 className="section-heading">
            Projects that <span className="accent">speak for themselves.</span>
          </h2>
          <p className="section-sub">
            Every project starts with a problem. Here's what we built to solve
            it.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={idx * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
