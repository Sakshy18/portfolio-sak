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
  heroImage?: string; // New field for the hero image
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
    image: "/projects/buddy-home.webp",
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
    image: "/projects/one-dash.webp",

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
    subtitle: "AI-Powered Football Talent Identification & Analytics",
    role: "Lead Product Designer",
    tools: [
      "Figma",
      "Maze",
      "Similarweb",
      "Competitor Analysis",
      "User Research",
      "Market Strategy",
    ],
    image: "/projects/stepout.webp",
    url: "https://www.stepout.ai/en",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "The Professional Scouting Gap",
        description:
          "Stepout is an AI-driven platform that bridges the gap between raw talent and professional scouting. I designed the core application interface and complex data visualization systems, focusing on turning granular match data into actionable coaching insights for academies and professional clubs.",
        metrics: [
          { label: "User Growth", value: "+40%" },
          { label: "Subscription Lift", value: "25%" },
          { label: "Data Points", value: "10k+" },
        ],
      },
      {
        id: "02",
        label: "Target",
        title: "Who I Designed For",
        description:
          "The platform serves a dual-purpose ecosystem: helping scouts find needles in haystacks and helping coaches refine their current roster.",
        insights: [
          {
            quote:
              "I need to quickly see which players are consistently outperforming their position average without watching hours of tape.",
            role: "The Talent Scout",
            takeaway:
              "Goal: High-level comparative matrices to filter thousands of players instantly.",
          },
          {
            quote:
              "Preparing for the next match requires me to visualize my lineup and review specific play-types from previous games.",
            role: "The Head Coach",
            takeaway:
              "Goal: Tactical tools like Lineup Builders and Video Playlists for daily training.",
          },
        ],
      },
      {
        id: "03",
        label: "Market",
        title: "Competitor Analysis & Strategy",
        description:
          "While giants like Wyscout and Hudl dominate the elite professional market, they are often too expensive or complex for mid-tier academies. Our strategy was to provide 'Elite Analytics with Local Intuition'.",
        decisions: [
          "Competitor Gap: Most platforms provide data but lack 'Tactical Context'.",
          "Strategic Pivot: Integrated video analysis directly into data figures (Playlist feature).",
          "Pricing Edge: Positioned features like the 'Sense Matrix' as high-value modules for paid subscribers.",
        ],
      },
      {
        id: "04",
        label: "Designs",
        title: "Core Feature Innovation",
        description:
          "I introduced three primary features that drove investor interest and significantly increased the platform's paid user base.",
        gallery: [
          {
            title: "Player Lineup Builder",
            subtitle: "Tactical Planning Tool",
            description:
              "One of the most requested features. It allows coaches to build formations and study player synergy for upcoming matches based on performance history.",
            imageUrl: "/projects/stepout/player-lineup.svg",
            decisions: [
              "Drag-and-drop formation logic",
              "Real-time fitness and form overlays",
              "Comparative bench-strength analysis",
            ],
          },
          {
            title: "Custom Playlists",
            subtitle: "Video Filtering Engine",
            description:
              "A major conversion driver for paid subscriptions. Coaches can filter match footage by 'Sense' or 'Action' to create review reels.",
            imageUrl: "/projects/stepout/playlist-default.svg",
            decisions: [
              "Angle-based camera switching",
              "Tag-based automatic clip generation",
              "Investor-requested 'Share with Player' flow",
            ],
          },
          {
            title: "The Sense Matrix",
            subtitle: "Proprietary Data Model",
            description:
              "A unique visualization that correlates cognitive player data with technical output, providing a 'Sense' score for player intelligence.",
            imageUrl: "/projects/stepout/sense-matrix.svg",
            decisions: [
              "Visualizing intangible traits (Vision, Timing)",
              "Normalized scoring against league averages",
              "Mobile-responsive data density",
            ],
          },
        ],
      },
      {
        id: "05",
        label: "Identity",
        title: "Visual Language & Performance",
        gallery: [
          {
            title: "Data Visualization System",
            subtitle: "Accuracy & Activity Maps",
            description:
              "A custom set of charts designed to maintain readability in dark environments (sidelines/locker rooms).",
            imageUrl: "/projects/stepout/data-points.svg",
            decisions: [
              "High-contrast color scales",
              "Locker-room accessibility testing",
            ],
          },
          {
            title: "Spotlight Focus",
            subtitle: "Player Highlighting",
            description:
              "Visual cues used within the video player to track specific athletes during motion analysis.",
            imageUrl: "/projects/stepout/spotlight.svg",
            decisions: [
              "Dynamic player tracking UI",
              "Non-obstructive labeling",
            ],
          },
        ],
      },
      {
        id: "06",
        label: "Outcome",
        title: "Impact & Growth",
        description:
          "The introduction of tactical tools (Lineup and Playlists) shifted the perception of Stepout from a simple 'database' to a 'daily essential'.",
        decisions: [
          "Successfully secured second-round funding based on the 'Lineup Builder' roadmap.",
          "Increased weekly active users (WAU) by 40% within three months.",
          "Created a visual standard for AI-integrated scouting reports.",
        ],
      },
    ],
  },
  {
    slug: "tyntan",
    title: "TynTan",
    subtitle: "Gamified Telegram Trading Bot: Swipe to Trade",
    role: "Lead Designer & Frontend Developer",
    tools: [
      "React Native",
      "Telegram Mini Apps API",
      "Figma",
      "Competitor Analysis",
      "Responsive Design",
    ],
    image: "/projects/tyntan.webp",
    heroImage: "/projects/tyntan/logo-2.svg",
    sections: [
      {
        id: "01",
        label: "Overview",
        title: "Trading at the Speed of a Swipe",
        description:
          "TynTan is a high-performance Telegram Web Bot designed to strip away the complexity of traditional crypto exchanges. I built a gamified interface that allows users to trade 30+ Binance-listed tokens and engage in opinion trading across 8+ categories through a simple swipe gesture.",
        metrics: [
          { label: "Beta Users", value: "500+" },
          { label: "Day 1 Launch", value: "100%" },
          { label: "Categories", value: "8+" },
        ],
      },
      {
        id: "02",
        label: "Market",
        title: "The Polymarket Alternative",
        description:
          "While Polymarket dominates the web-based prediction market, TynTan targets the mobile-first Telegram ecosystem. We identified that 'Fast-Paced' and 'Fun' were missing from the current boring FinTech UI landscape.",
        insights: [
          {
            quote:
              "Most trading apps feel like a spreadsheet. I want something that feels like a game but handles real value.",
            role: "Modern Retail Trader",
            takeaway:
              "Leverage the Tinder-style swipe mechanic to lower the barrier for entry.",
          },
          {
            quote:
              "I want to trade on the IPL match tonight without opening a complex exchange or using a VPN for Western sites.",
            role: "Indian Retail Trader",
            takeaway:
              "Hyper-localization of content (Kabaddi, IPL, Indian Politics) is the primary user acquisition driver.",
          },
        ],
      },
      {
        id: "03",
        label: "Logic",
        title: "Telegram Mini App Architecture",
        description:
          "As the lead frontend developer, I optimized the React Native codebase to run seamlessly within the Telegram Mini App environment, ensuring zero-latency responsiveness on both iOS and Android.",
        decisions: [
          "Cross-platform responsiveness for TG Web views",
          "Secure wallet connection flow for Profile sections",
          "Haptic feedback integration for successful swipes",
          "Activity-based point registration system for user retention",
        ],
      },
      {
        id: "04",
        label: "Designs",
        title: "Core Trading Flows",
        gallery: [
          {
            title: "The Swipe Feed",
            subtitle: "Opinion Trading & Swap",
            description:
              "The main home feed where users see questions or tokens and swipe to take a position. It’s designed for rapid decision-making.",
            imageUrl: "/projects/tyntan/swipe.svg",
            decisions: [
              "Card-stack navigation",
              "Clear Yes/No visual cues",
              "Immediate price feed updates",
            ],
          },
          {
            title: "Portfolio Management",
            subtitle: "Asset Overview",
            description:
              "A clean summary of all active transactions and token holdings, designed to be understood at a glance.",
            imageUrl: "/projects/tyntan/Portfolio.svg",
            decisions: [
              "Unified asset list",
              "Transaction history logging",
              "Real-time PNL tracking",
            ],
          },
          {
            title: "Gamification: Points System",
            subtitle: "User Engagement",
            description:
              "A dedicated section where user activity translates into points, fostering a competitive trading community.",
            imageUrl: "/projects/tyntan/points.svg",
            decisions: [
              "Progress bar visualization",
              "Activity-linked rewards",
              "Social sharing integration",
            ],
          },
        ],
      },
      {
        id: "05",
        label: "Identity",
        title: "Visual Language & Branding",
        gallery: [
          {
            title: "Profile & Security",
            subtitle: "Wallet Integration",
            description:
              "The profile hub where users manage their secure wallet connections with digital signature using metamask and personalized settings.",
            imageUrl: "/projects/tyntan/profile.svg",
            decisions: [
              "Secure-connect UI",
              "Simplified settings hierarchy",
              "Avatar customization",
            ],
          },
          {
            title: "Brand Assets",
            subtitle: "Logo & Graphics",
            description:
              "I designed the TynTan visual identity to feel tech-forward yet accessible. The logos and graphics reflect the fast-paced nature of the app.",
            imageUrl: "/projects/tyntan/graphics.svg",
            decisions: [
              "Vector-based scalability",
              "Modern gradient palette",
              "Iconography for TG Mini App menus",
            ],
          },
          {
            title: "Alternative Logo Design",
            subtitle: "Visual Flexibility",
            description:
              "A secondary logo variation (logo-1.svg) developed to ensure brand legibility across diverse UI environments, from small-scale headers to simplified splash screens.",
            imageUrl: "/projects/tyntan/logo-1.svg",
            decisions: [
              "Simplified geometry for small-scale rendering",
              "Optimized for high-contrast dark mode environments",
              "Balanced weighted strokes for consistent visibility",
            ],
          },
        ],
      },
      {
        id: "06",
        label: "Outcome",
        title: "Performance & Impact",
        description:
          "The app was tested with over 500 users on Day 1, proving the stability of the React Native frontend and the Golang backend architecture.",
        decisions: [
          "Successful onboarding of 500+ beta testers in 24 hours.",
          "High retention rate attributed to the points-based rewards system.",
          "Seamless performance across mobile web and native Telegram wrappers.",
        ],
      },
    ],
  },
 {
  slug: "fans-on-chain",
  title: "Fans On Chain",
  subtitle: "AI-Powered Fan Vaults: Profit from your team's success",
  role: "Lead Product Designer",
  tools: ["Figma", "Framer", "Web3 Integration", "User Research", "Data Visualization"],
  image: "/projects/fans-oon-chain.webp", 
   url: "https://precious-minds-500179.framer.app/",
  sections: [
    {
      id: "01",
      label: "Overview",
      title: "The Birth of Loyalty-Fi",
      description: "Fans.Onchain is a revolutionary blockchain platform where loyalty meets finance. I designed a system that allows sports fans to put their 'money where their heart is' by depositing into AI-managed vaults that bet exclusively on their team’s success. It transforms passive support into an active investment vehicle.",
      metrics: [
        { label: "Backtested ROI", value: "145%" },
        { label: "Avg. ARR", value: "55%" },
        { label: "Team Loyalty", value: "100%" }
      ]
    },
    {
      id: "02",
      label: "Research",
      title: "Community & Market Sentiment",
      description: "I analyzed the behavior of fans in high-stakes leagues like the EPL and LaLiga. The key finding was a massive gap in the market for 'Positive-only' betting-fans wanted to profit from their team's success without ever being incentivized to root for a loss.",
      insights: [
        {
          quote: "Traditional platforms feel cold. I want something that feels like being part of the club's financial journey.",
          role: "Primary Persona: The Loyal Investor",
          takeaway: "Designed the vault system to mirror 'stock ownership' rather than 'gambling'."
        }
      ]
    },
    {
      id: "03",
      label: "Journey",
      title: "Tokenomics & Onboarding",
      description: "The user journey focuses on 'Loyalty Tokenization'. I mapped the flow from connecting a secure Web3 wallet to depositing USDT into team-specific vaults, ensuring the transition from fiat to crypto felt seamless.",
      decisions: [
        "One-click wallet integration via metamask supported 10+ wallet providers",
        "Simplified 'Vault Share' explanation to replace complex DeFi jargon",
        "Progressive disclosure of technical data to avoid overwhelming new users"
      ]
    },
    {
      id: "04",
      label: "Decisions",
      title: "Rewarding High-Stakes Engagement",
      description: "Every design choice was made to bridge the gap between complex AI predictions and the emotional energy of match day.",
      decisions: [
        "Used a 'Dark Mode' high-contrast UI to match the intensity of live sports analytics",
        "Implemented real-time data sync to ensure 'Order Placing' reflects live match odds",
        "Designed the 'Sense' score to quantify player-intelligence data for vault performance"
      ]
    },
    {
      id: "05",
      label: "Designs",
      title: "Visual Language & Interface",
      description: "The core of the application—featuring the 7 key screens that drive the user experience.",
      gallery: [
        {
          title: "The Home Feed",
          subtitle: "Prediction Hub",
          description: "The main entry point where users interact with fandoms in upcoming matches based on categories",
          imageUrl: "/projects/fans/home-screen.svg",
          decisions: ["Worldwide championships featured", "Vault details and Deposit CTA highlighted", "8+ leagues to choose from"]
        },
        {
          title: "AI Agent Predictions",
          subtitle: "Forecasting Logic",
          description: "Detailed analytics showing how the AI agent calculates the probability of team success and manages risk.",
          imageUrl: "/projects/fans/agent-prediction.svg",
          decisions: ["Spider graphs for attribute visualization", "Confidence scoring UI", "Strategy explainers"]
        },
        {
          title: "Market Analytics",
          subtitle: "Backtested Data Visualization",
          description: "Tracking the 145% ROI and 55% ARR through high-fidelity candlestick and area charts.",
          imageUrl: "/projects/fans/match-details-2.svg",
          decisions: ["Integrated match event markers", "Recent bets and upcoming matches highlight for user retention", "Risk drawdown indicators"]
        },
        {
          title: "Technical Match Deep-Dive (Part 1)",
          subtitle: "Performance Attributes",
          description: "More details about the upcoming match and transaction history of the vault",
          imageUrl: "/projects/fans/match-details-1.svg",
          decisions: ["Live Order Book ", "Candlestick data", "CTA to place order based on AI prediction"]
        },
        {
          title: "Technical Match Deep-Dive (Part 2)",
          subtitle: "Game Summary & Momentum",
          description: "A secondary data view focused on team momentum and high-level match statistics.",
          imageUrl: "/projects/fans/prediction-data-visual.svg",
          decisions: ["Comparative team stats", "Real-time activity logs", "Momentum shift indicators"]
        },
        {
          title: "User Portfolio Hub",
          subtitle: "Wealth & Asset Management",
          description: "A centralized profile for tracking total earnings, active vault stakes, and secure wallet status.",
          imageUrl: "/projects/fans/user-profile.svg",
          decisions: ["Encrypted wallet display", "Total PnL visualization", "Asset distribution line graphs"]
        },
        {
          title: "Loyalty & Gamification",
          subtitle: "Fan Tier Tracking",
          description: "A profile view dedicated to showcase your profile to other fans",
          imageUrl: "/projects/fans/user-profile-2.svg",
          decisions: ["Link socials and wallet addresses", "Easy to edit profile"]
        }
      ]
    },
    {
      id: "06",
      label: "Outcome",
      title: "Scaling the Fan Revolution",
      description: "The platform successfully tokenized fandom for major EPL and LaLiga teams, proving that fans are willing to invest when the UX speaks their language.",
      decisions: [
        "145% Backtested ROI validated by seasonal performance",
        "Successful integration of token-gated exclusive fan perks",
        "High user retention via the Tier-based loyalty system"
      ]
    },
    {
      id: "07",
      label: "Reflection",
      title: "Future Scope & Sustainability",
      description: "The next phase involves moving beyond team-vaults into player-specific 'Talent Vaults'.",
      decisions: [
       
        "Plan for cross-chain vault compatibility",
        "Exploring live in-stadium AR reward claiming"
      ]
    }
  ]
}
];
