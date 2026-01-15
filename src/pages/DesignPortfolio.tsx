import { projects } from "../data/projects";
import { BentoGrid, BentoItem } from "../components/ui/bento-grid";
import { Link } from "react-router-dom";

const bentoLayout = [
  "md:col-span-4 md:row-span-3", // Buddy App (236×376)
  "md:col-span-6 md:row-span-1", // Buddy Website (236×180 wide)
  "md:col-span-6 md:row-span-1", // E2EM Website (236×180 wide)
  "md:col-span-4 md:row-span-3", // Tyntan App
  "md:col-span-4 md:row-span-2", // Stepout App
  "md:col-span-4 md:row-span-2", // Griffy App
  "md:col-span-6 md:row-span-1", // Fanta App (wide)
  "md:col-span-6 md:row-span-1", // Griffy Website (wide)
];

export default function DesignPortfolio() {
  return (
    <BentoGrid>
      {projects.map((project, i) => (
      <BentoItem
      
  key={project.slug}
  className={`${bentoLayout[i]} h-full w-full`}
>
          <Link
            to={`/projects/${project.slug}`}
            className="relative block w-full h-full group"
          >
            <img
              src={project.cover}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

          
          </Link>
        </BentoItem>
      ))}
    </BentoGrid>
  );
}
