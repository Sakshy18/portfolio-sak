// data/projectsData.ts

export interface GalleryItem {
  title: string;
  subtitle: string;
  description: string;
  decisions: string[];
  imageUrl?: string;
  video?: string;
}

export interface Insight {
  quote: string;
  role: string;
  takeaway: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Section {
  id: string;
  label: string;
  title: string;
  description?: string;
  insights?: Insight[];
  decisions?: string[];
  metrics?: Metric[];
  gallery?: GalleryItem[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  videoHero?: string; // New field for the .mov file
  role?: string; // "Designer & Developer"
  tools?: string[];
  url?: string;
  sections: Section[];
}

export const projectsData: Project[] = [
  {
    slug: "buddy-website",
    title: "Buddy Website",
    role: "Designer & Developer",
    tools: [
      "React",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "API Integration",
      "Figma",
      "Illustrations",
    ],
    videoHero: "/projects/buddy-web/hero-exp.mov",
    subtitle: "Landing page for a community platform",
    image: "/projects/buddy-home.png",
    url: "https://www.buddyapp.co.in/",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "Project Overview",
        description:
          "A playful, high-performance landing page designed to provide exposure for the Buddy App. Built for stakeholders and future investors to understand the vision.",
      },
      {
        id: "02",
        label: "Engineering",
        title: "Built with React + TS",
        description:
          "Developed using React, TypeScript, and Tailwind CSS. Responsive across phone and web with a 99% positive experience rating on Vercel Insights.",
        metrics: [
          { label: "Waitlist", value: "500+" },
          { label: "Launch", value: "4 Days" },
          { label: "Experience", value: "99%" },
        ],
      },
      {
        id: "03",
        label: "Decisions",
        title: "Playful UI & UX",
        description:
          "The website is built to be explored. We prioritized an intuitive experience that encourages users to come back.",
        decisions: [
          "Playful interactions to drive retention",
          "Arrow key shortcuts for intuitive scrolling",
          "Innovative Founder card and Vision/Mission layouts",
        ],
      },
      {
        id: "04",
        label: "Designs",
        title: "Visual Language",
        gallery: [
          {
            title: "Hero Experience",
            subtitle: "First Impressions",
            description:
              "High-impact landing section communicating the value proposition within 3 seconds.",
            decisions: ["Minimalist typography", "Interactive elements"],
            video: "/projects/buddy-web/feat-vid.mov",
          },
          {
            title: "Interactive Play",
            subtitle: "Pacman Game",
            description:
              "A functional Pacman game integrated to make the information discovery process playful.",
            decisions: ["Engagement through gamification"],
            video: "/projects/buddy-web/pac-vid.mov",
          },
          {
            title: "Information Architecture",
            subtitle: "FAQ & Details",
            description:
              "Clean, organized FAQ section designed for clarity and stakeholder information.",
            decisions: ["Accordion logic for density", "Clean typography"],
            video: "/projects/buddy-web/faq-vid.mov",
          },
          {
            title: "Visual Identity",
            subtitle: "Mascot & Character",
            description:
              "Consistency across the landing page using the Buddy mascot to build brand trust.",
            decisions: ["Consistent visual anchors"],
            video: "/projects/buddy-web/cat-vid.mov",
            // imageUrl: "/projects/buddy-web/cat.png"
          },
        ],
      },
      {
        id: "05",
        label: "Outcome",
        title: "Live Results",
        decisions: ["500 signups in 4 days", "99% positive Vercel score"],
      },
    ],
  },
  {
    slug: "oneDash",
    title: "One Dash",
    subtitle:
      "Affiliated dashboard and analytical insights ecosystem for Google products.",
    image: "/projects/one-dash.png",

    role: "UX/UI Designer & Strategy",
    tools: [
      "Figma",
      "Google Material Design",
      "Gemini AI Integration",
      "Analytical Modeling",
    ],
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "The Stakeholder Insight Engine",
        description:
          "One Dash is a specialized analytical ecosystem designed for Google product stakeholders. It bridges the gap between raw data and actionable business strategy, offering intuitive interfaces for both comprehensive dashboards and AI-powered on-demand reporting.",
      },
      {
        id: "02",
        label: "Research",
        title: "Solving the 'Data Fatigue' Crisis",
        description:
          "Stakeholder interviews revealed that while data was abundant, insights were hard to extract. Decision-makers were suffering from 'data fatigue' caused by dense tables and lack of context.",
        insights: [
          {
            quote:
              "I have 50 columns of data but I still don't know if we should greenlight the project.",
            role: "Product VP",
            takeaway:
              "Dashboards must prioritize clarity and 'storytelling' over raw data density.",
          },
          {
            quote:
              "Generating a customized report takes my team three days. We need it in three minutes.",
            role: "Marketing Director",
            takeaway:
              "On-demand, AI-driven report generation is a critical efficiency need.",
          },
        ],
      },
      {
        id: "03",
        label: "Journey",
        title: "Two Paths to Clarity",
        description:
          "I mapped the user journey into two distinct flows based on immediate user needs: The 'Big Picture' (Continuous Monitoring) and the 'Deep Dive' (On-Demand Analysis).",
        decisions: [
          "Flow A: Ad-Hoc Analysis (The 'Sakshi' Flow)",
          "Flow B: Continuous Monitoring (The 'One Dash' Flow)",
          "The 'Gemini' Ecosystem Theme for cross-product familiarity.",
          "Prioritizing interactive 'Pills' over dense form fields for user selection.",
        ],
      },
      {
        id: "04",
        label: "Decisions",
        title: "The Design Logic of Insights",
        description:
          "Every design choice was geared toward reducing cognitive load and maximizing time-to-insight.",
        decisions: [
          "Contextual AI: Integrating natural language queries directly into the data view (e.g., 'What is Apple's brand prominence?')",
          "Visual-First Reporting: Shifting from tabular data to intuitive graphs, sparklines, and progress indicators",
          "Progressive Disclosure: Hiding complexity behind smart filtering and AI prompts.",
        ],
      },
      {
        id: "05",
        label: "Designs",
        title: "Flow 1: Ad-Hoc AI Analysis (Pixel 10 Flow)",
        description:
          "This flow allows users to quickly generate specific insights. It starts with a simple choice and uses AI to refine the query and output.",
        gallery: [
          {
            title: "Initial Entry",
            subtitle: "The Choice",
            description:
              "The initial screen greets the user and presents a clean choice: 'AI Generated Report' or 'Ask Queries.' It sets the Gemini-inspired theme immediately.",
            decisions: [
              "Simple choice architecture",
              "Ecosystem-aligned aesthetic",
            ],
            imageUrl: "/projects/oneDash/screen1.svg",
          },
          {
            title: "Path 2: Ad-Hoc Querying",
            subtitle: "Pill-Based Questioning",
            description:
              "Choosing 'Ask Queries' leads to the next screen. This screen uses search and interactive pills ('Traffic', 'Sellout', 'Brand Prominence') to let users construct complex data queries easily.",
            decisions: [
              "Natural Language Processing (NLP) prompts",
              "Interactive filtering pills",
            ],
            imageUrl: "/projects/oneDash/one-dash1.svg",
          },
          {
            title: "Path 1: Report Generation",
            subtitle: "Structured Questionnaire",
            description:
              "Clicking 'Report' on Screen 1 moves the user to Screen 2. This screen presents a detailed questionnaire but replaces traditional forms with selectable 'pills' for rapid option selection.",
            decisions: [
              "Reduced cognitive load with pill selection",
              "Rapid prototyping",
            ],
            imageUrl: "/projects/oneDash/screen2.svg",
          },
          {
            title: "The Output: AI Report",
            subtitle: "Intuitive Data Presentation",
            description:
              "The generated report is highly visual. It breaks away from traditional columns and tables, using graphs and key data points to tell the data story intuitively.",
            decisions: [
              "Visual data storytelling",
              "Immediate business context",
            ],
            imageUrl: "/projects/oneDash/report-screen.svg",
          },
        ],
      },
      {
        id: "06",
        label: "Visuals",
        title: "Flow 2: Continuous Dashboards (Big Picture)",
        description:
          "These are the comprehensive dashboards (One Dash Board and One Dash 2) used for high-level monitoring and deep business analysis decisions.",
        gallery: [
          {
            title: "Comprehensive Monitoring",
            subtitle: "The 'All Data' View",
            description:
              "One Dash Board presents all key data points in one place. It uses interactive widgets, filters (by Country), and key metrics ('220,342,123 Total Visits') for rapid monitoring.",
            decisions: ["Single-screen awareness", "Integrated filtering"],
            imageUrl: "/projects/oneDash/one-dash-board.svg",
          },
          {
            title: "Detailed Business Analysis",
            subtitle: "Decision Support",
            description:
              "One Dash 2 provides a deeper dive. It includes sparkline trends, key metric comparisons (e.g., '1,234,232 Total Users'), and dedicated sections for deeper business analysis decisions.",
            decisions: ["Trend visualization", "Comparison metrics"],
            imageUrl: "/projects/oneDash/one-dash-2.svg",
          },
        ],
      },
      {
        id: "07",
        label: "Outcome",
        title: "Business Impact & Adoption",
        description:
          "Since launch, One Dash has become the primary analysis tool for stakeholders, dramatically reducing time-to-insight.",
        decisions: [
          "90% reduction in ad-hoc report generation time.",
          "Primary analysis tool for quarterly business reviews (QBRs).",
          "High user satisfaction score (4.8/5) for data intuitive visual design.",
        ],
      },
      {
        id: "08",
        label: "Reflection",
        title: "The Future of Analytical AI",
        description:
          "One Dash successfully demonstrates how AI can move from a simple chatbot to a core component of visual data analysis. The next phase will involve predictive modeling and automatic anomaly detection.",
        decisions: ["AI as a collaborative design partner", "Predictive UX"],
      },
    ],
  },
  {
    slug: "buddy-app",
    title: "Buddy",

    role: "UX/UI Designer",
    tools: [
      "Figma",
      "Similarweb",
      "Adobe Illustrator",
      "Miro",
      "UXCam",
      "Analytical Modeling",
      "Competitor Benchmarking",
    ],
    subtitle:
      "A comprehensive ecosystem for urban relocation and social integration.",
    image: "/projects/buddy-app.webp",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "The All-in-One Relocation Companion",
        description:
          "Buddy handles the full spectrum of moving: from finding a room to finding your first friend in a new city.",
      },
      {
        id: "02",
        label: "Research",
        title: "Identifying the 'Loneliness Epidemic'",
        description:
          "Through 20+ stakeholder interviews, I discovered that the biggest pain point was the social isolation following a move.",
        insights: [
          {
            quote:
              "I found a great apartment, but I haven't spoken to a single person outside of work in three weeks.",
            role: "New Resident",
            takeaway: "Users need translation from 'moving' to 'living'.",
          },
          {
            quote:
              "Existing apps feel like a chore. I want something that feels like a friend guiding me.",
            role: "College Student",
            takeaway: "Tone and personality are as important as utility.",
          },
        ],
      },
      {
        id: "03",
        label: "Journey",
        title: "From 'Stranger' to 'Local'",
        decisions: [
          "Stage 1: Pre-Move (Logistics)",
          "Stage 2: The Arrival (First 48 hours)",
          "Stage 3: Social Discovery (The Nudge)",
          "Stage 4: Belonging (Community)",
        ],
      },
      {
        id: "04",
        label: "Decisions",
        title: "The 'Nudge' Philosophy",
        description:
          "The 'Nudge' feature allows low-stakes social interaction via swiping on activities.",
        decisions: [
          "Swipe-to-Nudge mechanic",
          "Vibrant Dark Mode UI",
          "Mascot Integration",
        ],
      },
      {
        id: "05",
        label: "Designs",
        title: "Visual Language & Identity",
        gallery: [
          {
            title: "Onboarding Flow",
            subtitle: "Personalization",
            description:
              "A mascot-led questionnaire to categorize users by interests.",
            decisions: ["Mascot-led prompts", "Progressive disclosure"],
            imageUrl: "/projects/buddy/buddy-choose.png",
          },
          {
            title: "Buddy Feed",
            subtitle: "The Urban Pulse",
            description:
              "Recommendations of buddies based on preference, featuring swipe mechanics.",
            decisions: [
              "Shared interest emphasis",
              "Mutual connection visibility",
            ],
            imageUrl: "/projects/buddy/feed.png",
          },
          {
            title: "The Nudge Engine",
            subtitle: "Swipe-to-Socialize",
            description:
              "Platonic social swiping for activities like bookstore visits or gym sessions.",
            decisions: ["Gestural navigation", "Activity-based matching"],
            imageUrl: "/projects/buddy/nudge.png",
          },
        ],
      },
      {
        id: "06",
        label: "Outcome",
        title: "Impact & User Adoption",
        decisions: [
          "40% faster social integration.",
          "Avg. 3 Nudges accepted per user in week one.",
          "Positive feedback on QR ticketing.",
        ],
      },
      {
        id: "07",
        label: "Reflection",
        title: "Vibrant Cohesion",
        description:
          "The challenge was balancing a massive color palette without creating visual fatigue.",
        decisions: [
          "Harmonized Pastels",
          "Adaptive Accents",
          "Uniform Mascot Integration",
          "Charcoal Dark Mode depth",
        ],
      },
    ],
  },
  {
    slug: "stepout",
    title: "Stepout",
    subtitle: "A football analysis platform for players and coaches",
    image: "/projects/stepout.webp",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "Project Overview",
        description: "Performance tracking and analysis for athletes.",
      },
      { id: "02", label: "Research", title: "Coach & Scout Feedback" },
      { id: "03", label: "Journey", title: "Feature Roadmap" },
      { id: "04", label: "Decisions", title: "Performance Metrics" },
      {
        id: "05",
        label: "Designs",
        title: "Visual Language",
        gallery: [
          {
            title: "Player Analytics",
            subtitle: "Heatmaps & Stats",
            description:
              "Visualizing on-field movement and technical performance data.",
            decisions: ["Heatmap color-coding", "Stat comparison"],
            imageUrl: "/projects/stepout-stats.png",
          },
        ],
      },
      { id: "06", label: "Outcome", title: "Athlete Growth" },
      { id: "07", label: "Reflection", title: "Future Scope" },
    ],
  },
  {
    slug: "tyntan",
    title: "TynTan",
    subtitle: "Buy and sell tokens with a swipe",
    image: "/projects/tyntan.webp",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "Project Overview",
        description: "Gamified crypto trading platform.",
      },
      { id: "02", label: "Research", title: "Trading Psychology" },
      { id: "03", label: "Journey", title: "Interactive Prototype" },
      { id: "04", label: "Decisions", title: "The Swipe Mechanic" },
      {
        id: "05",
        label: "Designs",
        title: "Visual Language",
        gallery: [
          {
            title: "Swipe Interface",
            subtitle: "Trading Gamification",
            description:
              "Reducing barriers for new investors through intuitive swiping.",
            decisions: ["Haptic feedback", "Simplified candle charts"],
            imageUrl: "/projects/tyntan-swipe.png",
          },
        ],
      },
      { id: "06", label: "Outcome", title: "Transaction Volume" },
      { id: "07", label: "Reflection", title: "FinTech Compliance" },
    ],
  },
  {
    slug: "fans-on-chain",
    title: "Fans On Chain",
    subtitle: "Tokenize your fandom and earn rewards",
    image: "/projects/fans-oon-chain.png",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "Project Overview",
        description: "Web3 loyalty platform for sports fans.",
      },
      { id: "02", label: "Research", title: "Community Sentiment" },
      { id: "03", label: "Journey", title: "Tokenomics Design" },
      { id: "04", label: "Decisions", title: "Rewarding Engagement" },
      {
        id: "05",
        label: "Designs",
        title: "Visual Language",
        gallery: [
          {
            title: "Fandom Dashboard",
            subtitle: "Rewards Tracker",
            description:
              "Tracking loyalty scores and claiming unique on-chain assets.",
            decisions: ["Tier-based badge system", "Wallet integration"],
            imageUrl: "/projects/fans-dashboard.png",
          },
        ],
      },
      { id: "06", label: "Outcome", title: "Community Growth" },
      { id: "07", label: "Reflection", title: "Web3 Sustainability" },
    ],
  },
];
