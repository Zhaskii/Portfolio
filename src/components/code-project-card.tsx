import { ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import type { CodeProject } from "@/data/portfolio";
import { MotionSurface } from "./motion-surface";

export function CodeProjectCard({
  project,
  index,
}: {
  project: CodeProject;
  index: number;
}) {
  return (
    <MotionSurface
      delay={index * 0.08}
      className="code-project-card min-w-0"
      strength={2.5}
    >
      <div className="code-project-content">
        <div className="code-project-topline">
          <p className="code-project-category">{project.category}</p>
          <div className="code-project-status">
            <GitBranch size={14} />
            {project.status}
          </div>
        </div>
        <h3>{project.title}</h3>
        <p className="code-project-description">{project.description}</p>

        <div className="code-project-built">
          <h4>What I built</h4>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={15} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="code-project-footer">
          <div className="code-tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            data-cursor-redirect="true"
          >
            View source
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </MotionSurface>
  );
}
