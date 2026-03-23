export interface GalleryItem {
  title: string;
  subtitle: string;
  description: string;
  decisions: string[];
  imageUrl: string;
}
export interface Insight {
  quote: string;
  role: string;
  takeaway: string;
}
export interface Section {
id: string;
  label: string;
  title: string;
  description?: string; // Added description to section level
  insights?: Insight[];  // Added for Research section
  decisions?: string[]; // Added for General sections
  gallery?: GalleryItem[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  sections: Section[];
}

export const projectsData: Project[] = [
  {
    slug: "buddy-website",
    title: "Buddy Website",
    subtitle: "Landing page for a community platform",
    image: "/projects/buddy-home.png",
    sections: [
      { id: "01", label: "Overview", title: "Project Overview" },
      { id: "02", label: "Research", title: "User Research" },
      { id: "03", label: "Journey", title: "The Process" },
      { id: "04", label: "Decisions", title: "Key Decisions" },
      { 
        id: "05", 
        label: "Designs", 
        title: "Visual Language",
        gallery: [
          {
            title: "Hero Experience",
            subtitle: "First Impressions",
            description: "A high-impact landing section designed to communicate the value proposition within 3 seconds of scroll.",
            decisions: ["Minimalist typography for clarity", "Interactive 3D elements", "Direct CTA placement"],
            imageUrl: "/projects/buddy-web-hero.png"
          }
        ]
      },
      { id: "06", label: "Outcome", title: "Live Results" },
      { id: "07", label: "Reflection", title: "Final Thoughts" },
    ]
  },
  {
    slug: "one-dash",
    title: "One Dash",
    subtitle: "A dashboard for stakeholders to analyze data",
    image: "/projects/one-dash.png",
    sections: [
      { id: "01", label: "Overview", title: "Project Overview" },
      { id: "02", label: "Research", title: "Stakeholder Interviews" },
      { id: "03", label: "Journey", title: "Data Mapping" },
      { id: "04", label: "Decisions", title: "Hierarchy of Information" },
      { 
        id: "05", 
        label: "Designs", 
        title: "Dashboard Interface",
        gallery: [
          {
            title: "Analytical View",
            subtitle: "Global Metrics",
            description: "The core interface where users can filter massive datasets into actionable insights using custom widgets.",
            decisions: ["Modular widget layout", "Dark mode for reduced eye strain", "Real-time sync indicators"],
            imageUrl: "/projects/one-dash-main.png"
          }
        ]
      },
      { id: "06", label: "Outcome", title: "Business Impact" },
      { id: "07", label: "Reflection", title: "Scalability" },
    ]
  },
{
    slug: "buddy-app",
    title: "Buddy",
    subtitle: "A comprehensive ecosystem for urban relocation and social integration.",
    image: "/projects/buddy-app.webp",
    sections: [
      { 
        id: "01", 
        label: "Overview", 
        title: "The All-in-One Relocation Companion",
        description: "Buddy handles the full spectrum of moving: from finding a room to finding your first friend in a new city. Unlike competitors like Headspace or Roomeaze which focus on isolated parts of the journey, Buddy is a full-lifecycle bridge to a new life."
      },
      { 
        id: "02", 
        label: "Research", 
        title: "Identifying the 'Loneliness Epidemic'",
        description: "Through 20+ stakeholder interviews with working professionals and students, I discovered that the biggest pain point wasn't the move itself, it was the 30 days after. Users felt 'city-paralyzed' and socially isolated.",
        insights: [
          { 
            quote: "I found a great apartment, but I haven't spoken to a single person outside of work in three weeks.", 
            role: "New Resident",
            takeaway: "Users need translation from 'moving' to 'living'."
          },
          { 
            quote: "Existing apps feel like a chore. I want something that feels like a friend guiding me, not a directory.", 
            role: "College Student",
            takeaway: "Tone and personality are as important as utility."
          }
        ]
      },
     { 
        id: "03", 
        label: "Journey", 
        title: "From 'Stranger' to 'Local'",
        description: "I mapped the move-out journey into four distinct emotional phases. Buddy intervenes at the 'Isolation' phase to fast-track social integration.",
        decisions: [
          "Stage 1: Pre-Move (Logistics & Room-hunting)",
          "Stage 2: The Arrival (The first 48 hours of isolation)",
          "Stage 3: Social Discovery (The 'Nudge' intervention)",
          "Stage 4: Belonging (Community event participation)"
        ]
      },
      { 
        id: "04", 
        label: "Decisions", 
        title: "The 'Nudge' Philosophy",
        description: "The 'Nudge' feature was born from a need for low-stakes social interaction. Instead of the high pressure of 'friending' someone, users just swipe on activities like bookstore visits, parties, or gym sessions.",
        decisions: [
          "Swipe-to-Nudge: Lowering the cognitive load of initiating social plans.",
          "Vibrant Dark Mode: Creating a high-energy, safe space for late-night community browsing.",
          "Mascot Integration: Using a consistent theme to add personality and reduce 'app fatigue'."
        ]
      },
      { 
        id: "05", 
        label: "Designs", 
        title: "Visual Language & Identity",
        gallery: [
          {
            title: "Onboarding Flow",
            subtitle: "Personalization at Scale",
            description: "A mascot-led questionnaire to categorize users by interests, ensuring the 'Community Feed' is relevant from the start.",
            decisions: ["Mascot-led prompts", "Progressive disclosure of categories"],
            imageUrl: "/projects/buddy/buddy-choose.png"
          },
          {
            title: "Interest Mapping",
            subtitle: "Category Selection",
            description: "Visual icons help users quickly identify their hobbies, which feeds into the algorithm to show relevant activities and buddy recommendations.",
            decisions: ["Visual icon grid for speed", "Multi-select capability"],
            imageUrl: "/projects/buddy/categories.png"
          },
          {
            title: "Event Discovery",
            subtitle: "Local Engagement",
            description: "A specialized view for finding local events. The UI prioritizes date and location to help users plan their weekends effortlessly.",
            decisions: ["Horizontal date scroller", "Direct 'Join' primary actions", "Users can also create and host an event"],
            imageUrl: "/projects/buddy/events.png"
          },
      {
            title: "Buddy Feed",
            subtitle: "The Urban Pulse",
            description: "Actual recommendations of buddies based on your preference, where you can swipe to see more buddies and tap to know more about them, send them a request and chat with them. You can get best recommendations about the city from these buddies",
            decisions: ["Users can swipe on buddy profiles to express interest, creating a low-pressure way to meet new people.", "Each buddy profile emphasizes shared interests and mutual connections to foster quicker rapport.", ],
            imageUrl: "/projects/buddy/feed.png"
          },
          {
            title: "The Nudge Engine",
            subtitle: "Swipe-to-Socialize",
            description: "Inspired by the simplicity of dating apps but applied to platonic social life. Swipe on activities like bookstore visits or parties.",
            decisions: ["Gestural navigation", "Create a nudge, and accept or decline a nudge", "Activity-based matching algorithm"],
            imageUrl: "/projects/buddy/nudge.png"
          },
          {
            title: "Rewards System",
            subtitle: "Gamified Progress",
            description: "To encourage community participation, users earn points for attending events or helping others, visible through a custom point-tracking UI.",
            decisions: ["Progress visualization", "Tiered achievement badges"],
            imageUrl: "/projects/buddy/points.png"
          },
          {
            title: "Personal Preferences",
            subtitle: "Safe Space Controls",
            description: "Privacy is paramount. Users have granular control over who sees their Nudges and what data they share with the community.",
            decisions: ["Clear toggle hierarchy", "Inclusive language for users of all comfort levels"],
            imageUrl: "/projects/buddy/preference.png"
          },
          {
            title: "User Profile",
            subtitle: "Social Identity",
            description: "Profiles highlight shared interests first, facilitating faster connections between users with similar lifestyles.",
            decisions: ["Interest-first layout", "Verified badge visibility"],
            imageUrl: "/projects/buddy/profile.png"
          },
          {
            title: "Top Recommendations",
            subtitle: "Discovery Engine",
            description: "Personalized suggestions for local services and groups, powered by user interaction data.",
            decisions: ["Context-aware ranking", "Simplified card metadata"],
            imageUrl: "/projects/buddy/rec.png"
          },
          {
            title: "Subscription Model",
            subtitle: "Transparent Pricing",
            description: "Clearly defined tiers that show the value of premium features without the clutter of traditional FinTech apps.",
            decisions: ["Comparison matrix UI", "One-tap upgrade path"],
            imageUrl: "/projects/buddy/subscription.png"
          },
          {
            title: "Design System I",
            subtitle: "Typography & Hierarchy",
            description: "A showcase of the primary typeface, chosen for its balance between playfulness and professional legibility.",
            decisions: ["Serif/Sans-serif pairing", "Mathematical type scale"],
            imageUrl: "/projects/buddy/typo-1.svg"
          },
          {
            title: "Design System II",
            subtitle: "Brand Colors & Mascots",
            description: "How we managed a massive color palette. Each color is functional, tied to specific app sections to prevent visual chaos.",
            decisions: ["Functional color-coding", "Mascot personality anchors"],
            imageUrl: "/projects/buddy/typo-2.svg"
          }
        ]
      },
     { 
        id: "06", 
        label: "Outcome", 
        title: "Impact & User Adoption",
        description: "Testing with a group of 15 college graduates moving to Bangalore showed a massive shift in social confidence.",
        decisions: [
          "40% faster social integration compared to traditional apps.",
          "Avg. 3 'Nudges' accepted per user in the first week.",
          "High praise for the 'All-in-one' nature of the QR ticketing system."
        ]
      },
     { 
        id: "07", 
        label: "Reflection", 
        title: "The Challenge of Vibrant Cohesion",
        description: "The primary design hurdle was integrating a wide spectrum of colors—essential for Buddy's personality—without creating visual fatigue or a 'clownish' aesthetic.",
        decisions: [
          "Harmonized Pastels: Used a specific saturation limit for pastels to ensure they pop against the dark mode background without vibrating.",
          "Adaptive Accents: In light mode, I pivoted to heavy black accents and high-contrast lines to ground the colors and maintain a professional edge.",
          "Uniform Mascot Integration: Used the mascot as a neutral anchor across all screens to provide a consistent visual 'home' regardless of the page color.",
          "Dark Mode Depth: Instead of pure black, I used deep charcoal layers to allow the vibrant community colors to recede and advance naturally."
        ]
      }
    ]
  },
  {
    slug: "stepout",
    title: "Stepout",
    subtitle: "A football analysis platform for players and coaches",
    image: "/projects/stepout.webp",
    sections: [
      { id: "01", label: "Overview", title: "Project Overview" },
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
            description: "Visualizing on-field movement and technical performance data for post-match analysis.",
            decisions: ["Heatmap color-coding", "Interactive stat comparison", "Video playback integration"],
            imageUrl: "/projects/stepout-stats.png"
          }
        ]
      },
      { id: "06", label: "Outcome", title: "Athlete Growth" },
      { id: "07", label: "Reflection", title: "Future Scope" },
    ]
  },
  {
    slug: "tyntan",
    title: "TynTan",
    subtitle: "Buy and sell tokens with a swipe",
    image: "/projects/tyntan.webp",
    sections: [
      { id: "01", label: "Overview", title: "Project Overview" },
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
            description: "Making token trading as intuitive as a dating app to reduce the barrier of entry for new investors.",
            decisions: ["Haptic feedback on swipe", "Micro-animations for success", "Simplified candle charts"],
            imageUrl: "/projects/tyntan-swipe.png"
          }
        ]
      },
      { id: "06", label: "Outcome", title: "Transaction Volume" },
      { id: "07", label: "Reflection", title: "FinTech Compliance" },
    ]
  },
  {
    slug: "fans-on-chain",
    title: "Fans On Chain",
    subtitle: "Tokenize your fandom and earn rewards",
    image: "/projects/fans-oon-chain.png",
    sections: [
      { id: "01", label: "Overview", title: "Project Overview" },
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
            description: "A gamified experience where fans can track their 'loyalty score' and claim unique on-chain assets.",
            decisions: ["Tier-based badge system", "Wallet integration UI", "Social sharing hooks"],
            imageUrl: "/projects/fans-dashboard.png"
          }
        ]
      },
      { id: "06", label: "Outcome", title: "Community Growth" },
      { id: "07", label: "Reflection", title: "Web3 Sustainability" },
    ]
  }
];