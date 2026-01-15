import DesignPortfolio from "../pages/DesignPortfolio.tsx";
import FrontendProjects from "../pages/FrontendProjects.tsx";

export default function ShowcaseSection() {
  return (
    <main className="max-w-5xl mx-auto px-4">
      <section id="design" className="mb-20">
        <h2 className="text-3xl font-bold mb-8">Design Portfolio</h2>
        <DesignPortfolio />
      </section>
      <section id="frontend">
        <h2 className="text-3xl font-bold mb-8">Frontend Projects</h2>
        <FrontendProjects />
      </section>
    </main>
  );
}
