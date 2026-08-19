import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { MotionSurface } from "./motion-surface";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const externalLinkProps = project.url.startsWith("http")
    ? { target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <MotionSurface
      delay={index * 0.08}
      className="project-card min-w-0"
      strength={3.5}
    >
      <a
        href={project.url}
        className="project-visual"
        aria-label={`View ${project.title}`}
        {...externalLinkProps}
      >
        <div className="project-image-frame relative w-full min-w-0">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 980px) 50vw, 33vw"
            className="project-image block h-full w-full object-cover"
          />
          <div className="project-browser-chrome">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span className="project-domain">
              {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            </span>
          </div>
          <div className="project-view-hint">
            View website
            <ArrowUpRight size={15} />
          </div>
        </div>
      </a>

      <div className="project-meta">
        <div className="project-title-row">
          <div>
            <p className="project-overline">
              <span>0{index + 1}</span>
              {project.category}
              <i aria-hidden="true" />
              {project.year}
            </p>
            <h3>{project.title}</h3>
          </div>
          <a
            href={project.url}
            aria-label={`Open ${project.title}`}
            {...externalLinkProps}
          >
            <ArrowUpRight size={22} />
          </a>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </MotionSurface>
  );
}
