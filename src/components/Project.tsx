import { ArrowUpRight } from "lucide-react";
import Section from "./Section";
import { project } from "@/data/portfolio";
import SmartLink from "./SmartLink";

export default function Project() {
  return (
    <Section id="project" label="03 — Project">
      <h2 id="project-heading" className="heading-lg text-ink-900 mb-10">
        Featured project.
      </h2>

      <div className="border border-ink-200 bg-ink-50">
        {/* Screenshot / preview area */}
        <div className="border-b border-ink-200 aspect-[16/9] bg-ink-100 flex items-center justify-center relative overflow-hidden">
          {project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-center px-6">
              <p className="font-mono text-sm text-ink-400">
                Screenshot to be added
              </p>
              <p className="body-sm mt-2">
                A real screenshot will appear here once the project is ready.
              </p>
            </div>
          )}

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className="font-mono text-xs uppercase tracking-[0.15em] bg-ink-50 border border-ink-200 px-3 py-1.5 text-olive-dark">
              {project.status}
            </span>
          </div>
        </div>

        {/* Details */}
        <div className="p-6 md:p-10">
          <h3 className="heading-md text-ink-900 mb-4">
            {project.title}
          </h3>

          <p className="body-lg mb-8 max-w-prose-narrow">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-8">
            <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-ink-500 mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-6 border-t border-ink-200">
            <SmartLink
              href={project.githubUrl}
              placeholderText="GitHub repository — to be added"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 hover:text-terracotta transition-colors"
            >
              <span>View on GitHub</span>
              <ArrowUpRight size={15} />
            </SmartLink>

            <SmartLink
              href={project.liveUrl}
              placeholderText="Live demo — to be deployed"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-800 hover:text-terracotta transition-colors"
            >
              <span>Live demo</span>
              <ArrowUpRight size={15} />
            </SmartLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
