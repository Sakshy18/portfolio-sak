export interface GalleryItem {
  title: string;
  subtitle: string;
  description: string;
  decisions: string[];
  imageUrl: string;
}

export interface SkillGroup {
  category: string;
  tags: string[];
}

export interface EducationEntry {
  institution: string;
  location: string;
  degree: string;
  duration: string;
  type: string;
  description: string;
}

export interface ExperienceEntry {
  company: string;
  location: string;
  summary: string;
  roles: {
    title: string;
    duration: string;
    type: string;
    description: string;
  }[];
}

export interface AboutSection {
  id: string;
  label: string;
  title: string;
  description?: string;
  // Unique data fields for this profile page
  experience?: ExperienceEntry[];
  education?: EducationEntry[];
  skills?: SkillGroup[];
  // Hobbies use the gallery pattern
  hobbiesGallery?: GalleryItem[]; 
}

export interface AboutProfile {
  name: string;
  title: string;
  profilePicUrl: string;
  summary: string;
  sections: AboutSection[];
}

export const aboutMeData: AboutProfile = {
  name: "Sumairha Mumtaz",
  title: "Experience Designer",
  profilePicUrl: "/path/to/profile-pic.png", // <--- UPDATE THIS PATH
  summary: "Design strategist with five years of experience advocating for user needs.",
  sections: [
    {
      id: "01",
      label: "Experience",
      title: "Design & Consulting Journey",
      description: "My career has been defined by bridging the gap between business goals and human-centered needs, working across sectors including education, healthcare, banking, and fintech.",
      experience: [
        {
          company: "CGI Inc",
          location: "Pittsburgh ➔ San Francisco (hybrid)",
          summary: "One of the world's largest IT and business consulting firms. I was a part of the company's in-house Human Centered Design practice.",
          roles: [
            {
              title: "Design Strategist",
              duration: "Feb 2023 - Dec 2025",
              type: "Full-time",
              description: "Working on design and business consulting roles for clients and internal teams. Projects spanned education, healthcare, banking, and fintech — varying widely in sector, scale, and complexity."
            },
            {
              title: "Business Strategist & Product Designer",
              duration: "Jun 2022 - Aug 2022",
              type: "Internship",
              description: "Early exposure to enterprise-scale design consulting. Supported research, synthesis, and design work across client engagements."
            }
          ]
        },
        {
          company: "Investigating Design",
          location: "India",
          summary: "A research practice exploring the role of design in society.",
          roles: []
        }
      ]
    },
    {
      id: "02",
      label: "Education",
      title: "Academic Foundation",
      description: "My education provided the theoretical and critical thinking framework essential for tackling complex design challenges.",
      education: [
        {
          institution: "Carnegie Mellon University",
          location: "Pittsburgh, PA",
          degree: "Business Core",
          duration: "",
          type: "Curriculum",
          description: ""
        },
        {
          institution: "Graduate Teaching Assistant",
          location: "",
          degree: "Business Core (III 49743)",
          duration: "Aug 2022 - Dec 2022",
          type: "Part-time",
          description: "Teaching Assistant under Prof. David Lamont. Supported facilitation and communication for a graduate-level business course."
        }
      ]
    },
    {
      id: "03",
      label: "Skills",
      title: "Toolkit & Practices",
      description: "My expertise spans user research, interactive prototyping, workshop facilitation, and the integration of emerging AI tools into the design workflow.",
      skills: [
        {
          category: "Practice",
          tags: ["Workshop Facilitation", "Experience Design", "Service Design", "UI Design", "Business Strategy"]
        },
        {
          category: "Research",
          tags: ["User Interviews", "Blueprinting", "Journey Mapping", "Co-design", "Usability Testing"]
        },
        {
          category: "Tools",
          tags: ["Figma", "Mural", "FigJam", "Webflow", "Spline", "Adobe Illustrator", "Adobe InDesign", "Procreate"]
        },
        {
          category: "AI",
          tags: ["Vibe-coding", "Research Synthesis", "Generative Ideation", "Claude", "Replit"]
        }
      ]
    },
    {
      id: "04",
      label: "Hobbies",
      title: "Off-Hours Creative Focus",
      description: "My interests outside of work keep me creative and provide fresh perspectives for my design thinking.",
      hobbiesGallery: [
        {
          title: "Photography I",
          subtitle: "Street & Architecture",
          description: "A placeholder for photography descriptions. For example, capturing the contrast between old and new in dynamic urban environments.",
          decisions: ["Shot on Fujifilm X-T4", "35mm Prime Lens", "Monochrome Edit"],
          imageUrl: "/path/to/your/photo-1.jpg" // <--- UPDATE THIS PATH
        },
        {
          title: "Generative Art",
          subtitle: "Code-Based Creative Outlets",
          description: "Exploring the intersection of geometry and chance using tools like Replit or Claude for visualization.",
          decisions: ["Canvas API", "Randomized parameters", "Pastel Palette"],
          imageUrl: "/path/to/your/gen-art.png" // <--- UPDATE THIS PATH
        }
      ]
    }
  ]
};