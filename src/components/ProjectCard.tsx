import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      data-cursor="hover"
      data-cursor-text="View"
      className="relative block w-full h-full rounded-xl overflow-hidden group"
    >
      <img
        src={project.cover}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

    

      <div className="absolute bottom-4 left-4 text-xl font-semibold text-white">
        {project.title}
      </div>
    </Link>
  );
}
