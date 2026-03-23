
export interface GalleryItem {
  title: string;
  subtitle: string;
  description: string;
  decisions: string[];
  imageUrl?: string;
 type?: "image" | "spotify" | "grid";
images?: string[] | {
  capture: string[];
  create: string[];
  curate: string[];
};
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
  name: "Sakshi Thombre",
  title: "Product Engineer (Design + Development)",
  profilePicUrl: "/assets/sakshi.jpeg",
  summary:
    "I design, build, and sometimes obsess over digital products. From sketching ideas to shipping interfaces, I enjoy working at the intersection of design and code, making things that not only work well, but feel right. I’m especially drawn to crafting clean systems, exploring user behavior, and bringing ideas to life end-to-end.",
  sections: [
    {
      id: "01",
      label: "Experience",
      title: "Product, Design & Engineering Journey",
      description:
        "My work sits at the intersection of product thinking, design systems, and frontend engineering. Building scalable, user-centered digital products from 0→1 and beyond.",
      experience: [
        {
          company: "Buddy",
          location: "India",
          summary:
            "Early-stage product where I am working as a founding member shaping the product, brand, and user experience from scratch.",
          roles: [
            {
              title: "Founding Member",
              duration: "Aug 2025 – current",
              type: "Full-time",
              description:
                "Designed the entire brand identity from scratch and played a key role in defining the product vision. Collaborated closely on product strategy, feature discussions, and UX decisions. Designed and developed the landing page for Buddy. Contributed to end-to-end product design by translating brand guidelines and UX flows into scalable UI systems and consistent user experiences."
            }
          ]
        },
        {
          company: "Griffy",
          location: "Pune",
          summary:
            "Web3-based opinion trading platform focused on high-performance interfaces and real-time systems.",
          roles: [
            {
              title: "Software Development Engineer",
              duration: "June 2024 – June 2025",
              type: "Full-time",
              description:
                "Led frontend development and design for core product surfaces including the main web app and Telegram mini app. Built 25+ high-performance pages using ReactJS and TypeScript. Designed and developed the main trading interface and user experience. Engineered a real-time Telegram mini app with optimized state management, reducing API calls by 40%. Built an admin dashboard for automation workflows, reducing manual effort by 50%. Focused on scalable UI architecture, performance, and seamless user experience for 15,000+ monthly users."
            }
          ]
        },
        {
          company: "StepOut",
          location: "Remote",
          summary:
            "StepOut enhances player & team performance through in-depth football data & video analysis using AI & ML.",
          roles: [
            {
              title: "Design Intern",
              duration: "Oct 2023 – Jan 2024",
              type: "Internship",
              description:
                "Worked on designing and improving multiple analytical dashboards and user-facing features. Revamped playlist and player experiences to enhance engagement. Focused on UI improvements, performance optimization, and usability. Conducted testing and debugging using modern tools. Contributed to notification systems and automation workflows improving efficiency and engagement metrics."
            }
          ]
        },
        {
          company: "Social Spex",
          location: "India",
          summary:
            "Marketing agency working across diverse industries.",
          roles: [
            {
              title: "Design Intern",
              duration: "",
              type: "Internship",
              description:
                "Designed graphics and visual assets across multiple domains including education, travel, beauty, and life coaching. Worked on brand communication, social media creatives, and visual storytelling tailored to different audiences."
            }
          ]
        }
      ]
    },
    {
      id: "02",
      label: "Education",
      title: "Academic Foundation",
      description:
        "Strong academic background in computer science with a focus on building scalable systems and problem-solving.",
      education: [
        {
          institution: "Savitribai Phule Pune University",
          location: "Pune",
          degree: "Bachelor of Engineering in Computer Science (CGPA: 9.48)",
          duration: "Aug 2020 – May 2024",
          type: "Full-time",
          description: ""
        }
      ]
    },
    {
      id: "03",
      label: "Skills",
      title: "Toolkit & Practices",
      description:
        "A hybrid skillset combining product thinking, design systems, and modern frontend engineering.",
      skills: [
        {
          category: "Tools",
          tags: [
            "Figma",
            "Mural",
            "FigJam",
            "Webflow",
            "Spline",
            "Adobe Illustrator",
            "Adobe InDesign",
            "Procreate",
            "Framer",
            "Vercel",
            "GitHub"
          ]
        },
        {
          category: "Research",
          tags: [
            "User Interviews",
            "Blueprinting",
            "Journey Mapping",
            "Co-design",
            "Usability Testing",
            "Research Synthesis"
          ]
        },
      
        {
          category: "Frontend",
          tags: [
            "React",
            "Next.js",
            "React Native",
            "TypeScript",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS"
          ]
        },
          {
          category: "Practice",
          tags: [
            "Workshop Facilitation",
            "Experience Design",
            "Service Design",
            "UI Design",
            "Business Strategy",
            "Product Thinking",
            "Design Systems",
            "Stakeholder Collaboration",
            "Market Research",
            "Requirement Analysis"
          ]
        },
        {
          category: "Programming",
          tags: [
            "Python",
            "SQL",
            "Flutter"
          ]
        },
        {
          category: "AI",
          tags: [
            "Vibe-coding",
            "Generative Ideation",
            "Claude",
            "Replit"
          ]
        }
      ]
    },
    {
      id: "04",
      label: "Hobbies",
      title: "Off-Hours Creative Focus",
      description:
        "Creative exploration beyond product work.",
      hobbiesGallery: [
        {
  title: "Spotify Dandelion",
  subtitle: "Music Taste Visualization",
  description: "A visual representation of my listening habits across genres and artists.",
  decisions: [
    "Node size → listening frequency",
    "Color → genre",
    "Hover on nodes to see artist and genre details"
  ],
  type: "spotify"
},
        
{
 title: "What I like doing",
  subtitle: "",
  description: "",
  decisions: [],
  type: "grid",
  images: {
    capture: [
      "/assets/paintings/capture1.svg",
      "/assets/paintings/capture2.svg",
      "/assets/paintings/capture3.svg",
      "/assets/paintings/capture4.svg",
      "/assets/paintings/capture5.svg",
    ],
    create: [
      "/assets/paintings/create1.svg",
      "/assets/paintings/create2.svg",
      "/assets/paintings/create3.svg",
      "/assets/paintings/create4.svg",
      "/assets/paintings/create5.svg",
      "/assets/paintings/create6.svg"
    ],
    curate: [
      "/assets/paintings/curate1.svg",
      "/assets/paintings/curate2.svg",
      "/assets/paintings/curate3.svg",
    ]
  }
},

      ]
    }
  ]
};