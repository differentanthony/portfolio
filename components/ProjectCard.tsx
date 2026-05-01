import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <div>
          <span className="project-type">{project.type}</span>
          <h3 className="project-title">{project.name}</h3>
        </div>
        <a href={project.url} className="project-link-btn">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-stack">
        {project.stack.map((tech) => (
          <span key={tech} className="project-tech">
            {tech}
          </span>
        ))}
      </div>
      <div className="project-footer">
        <span className="project-year">{project.year}</span>
        {project.aiAssisted && (
          <span className="project-ai-badge">AI-assisted</span>
        )}
      </div>
    </div>
  );
}
