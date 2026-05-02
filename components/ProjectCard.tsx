import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-thumbnail">
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={600}
          height={340}
          className="project-thumbnail-img"
        />
      </div>
      <div className="project-card-header">
        <div>
          <span className="project-type">{project.type}</span>
          <h3 className="project-title">{project.name}</h3>
        </div>
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