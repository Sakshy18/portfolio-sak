import { BentoGrid, BentoItem } from "./ui/bento-grid";
import ProjectCard from "./ProjectCard";
import type { Project } from "../data/projects";

const layout = [
   "md:col-span-4 md:row-span-3", // Buddy App (236×376)
  "md:col-span-6 md:row-span-1", // Buddy Website (236×180 wide)
  "md:col-span-6 md:row-span-1", // E2EM Website (236×180 wide)
  "md:col-span-4 md:row-span-3", // Tyntan App
  "md:col-span-4 md:row-span-2", // Stepout App
  "md:col-span-4 md:row-span-2", // Griffy App
  "md:col-span-6 md:row-span-1", // Fanta App (wide)
  "md:col-span-6 md:row-span-1", // Griffy Website (wide)
];

export default function ProjectsBentoGrid({ projects }: { projects: Project[] }) {
  return (
    <BentoGrid>
      {projects.map((project, i) => (
        <BentoItem key={project.slug} className={layout[i]}>
          <ProjectCard project={project} />
        </BentoItem>
      ))}
    </BentoGrid>
  );
}
