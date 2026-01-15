import { useParams } from "react-router-dom";

const projects = {
  zeronet: {
    title: "Branding: Zeronet",
    images: ["/assets/Frame1.png", "/assets/Frame2.png"],
    description: "Zeronet branding project..."
  },
  focusflow: {
    title: "Mobile App UI: FocusFlow",
    images: ["/assets/Frame2.png"],
    description: "FocusFlow UI system..."
  }
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects[slug as keyof typeof projects];

  if (!project) return <div>Not found</div>;

  return (
    <div>
      {/* HERO CAROUSEL */}
      <div className="h-[70vh] w-full overflow-hidden">
        <div className="flex h-full">
          {project.images.map((img) => (
            <img
              key={img}
              src={img}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold">{project.title}</h1>
        <p className="mt-6 text-white/70 max-w-xl">
          {project.description}
        </p>
      </div>
    </div>
  );
}
