import { ProjectGallery } from "./ProjectGallery";
import { ProjectHero } from "./ProjectHero";
import { ProjectMeta } from "./ProjectMeta";
import { Section } from "./Section";

export function ProjectLayout({ data }) {
  return (
    <div className="max-w-[1200px] mx-auto px-6 md:px-12">

      <ProjectHero title={data.title} image={data.heroImage} />

      <ProjectMeta
        role={data.role}
        timeline={data.timeline}
      />

      <Section title="Overview">
        {data.overview}
      </Section>

      <Section title="Problem">
        {data.problem}
      </Section>

      <Section title="Solution">
        {data.solution}
      </Section>

      <ProjectGallery images={data.screens} />

    </div>
  )
}
