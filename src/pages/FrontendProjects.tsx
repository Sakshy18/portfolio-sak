interface ProjectItem {
  title: string;
  description: string;
  link: string;
  img?: string;
}

const projects: ProjectItem[] = [
  {
    title: "Awesome Portfolio App",
    description: "Sleek portfolio built with Vite + React + Tailwind. Lightning-fast and fully responsive.",
    link: "https://github.com/yourgithub/portfolio",
    img: "/assets/frame3.png",
  },
  {
    title: "Design System UI Components",
    description: "Reusable React + shadcn/ui component library, production-ready.",
    link: "https://github.com/yourgithub/design-system",
    img: "/assets/frame5.png",
  },
  // Add as many projects as you need.
];

export default function FrontendProjects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map(({ title, description, link, img }) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          key={title}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 block"
        >
          {img && <img src={img} alt={title} className="mb-4 rounded-lg" />}
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-gray-300 text-[15px]">{description}</p>
        </a>
      ))}
    </div>
  );
}
