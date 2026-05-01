import { projects } from "@/data/projects";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#0A0F0A] text-[#C8D8C0]">
      {/* Back nav */}
      <div className="border-b border-[#1E3A1E]">
        <div className="container-custom py-5">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-[#C8D8C0] hover:text-[#E8F0E0] transition-colors font-mono uppercase tracking-widest"
          >
            <ArrowLeft size={14} />
            Back to projects
          </Link>
        </div>
      </div>

      <div className="container-custom py-20 max-w-3xl">
        {/* Tag */}
        <span className="section-tag">{project.type}</span>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#E8F0E0] mb-4 leading-tight">
          {project.name}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap gap-4 mb-10 items-center">
          <span className="font-mono text-xs text-[#C8D8C0] uppercase tracking-widest">
            {project.industry}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#2D5A2D]" />
          <span className="font-mono text-xs text-[#C8D8C0] uppercase tracking-widest">
            {project.year}
          </span>
          {project.aiAssisted && (
            <>
              <span className="w-1 h-1 rounded-full bg-[#2D5A2D]" />
              <span className="font-mono text-xs px-2.5 py-1 border border-[#2D5A2D] text-[#4A7C4A]">
                AI-assisted
              </span>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#1E3A1E] mb-10" />

        {/* Description */}
        <p className="text-lg text-[#C8D8C0] leading-relaxed mb-10">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mb-10">
          <div className="font-mono text-xs text-[#4A7C4A] uppercase tracking-widest mb-4">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 bg-[#122212] border border-[#1E3A1E] text-[#C8D8C0]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Result */}
        <div className="bg-[#122212] border border-[#1E3A1E] p-6 mb-10">
          <div className="font-mono text-xs text-[#4A7C4A] uppercase tracking-widest mb-3">
            Result
          </div>
          <p className="text-[#E8F0E0] font-medium">{project.result}</p>
        </div>

        {/* Live link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#2D5A2D] text-[#E8F0E0] text-sm tracking-widest uppercase hover:bg-[#4A7C4A] transition-all duration-200"
        >
          View Live Site
          <ArrowUpRight size={16} />
        </a>
      </div>
    </main>
  );
}
