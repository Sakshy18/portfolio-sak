export interface Theme {
  name: string;
  colors: {
    // Background colors
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    
    // Brand colors
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    
    // Accent colors
    accent: string;
    accentForeground: string;
    muted: string;
    mutedForeground: string;
    
    // UI colors
    border: string;
    ring: string;
    
    // Gradient colors for animations
    gradientFrom: string;
    gradientVia: string;
    gradientTo: string;
  };
}

export const themes: Record<string, Theme> = {
  green: {
    name: "Nature Green",
    colors: {
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "#31572c",
      cardForeground: "#ecf39e",
      
      primary: "#4f772d",
      primaryForeground: "#ecf39e",
      secondary: "#90a955",
      secondaryForeground: "#132a13",
      
      accent: "#90a955",
      accentForeground: "#132a13",
      muted: "#31572c",
      mutedForeground: "#90a955",
      
      border: "#4f772d",
      ring: "#90a955",
      
      gradientFrom: "#4f772d",
      gradientVia: "#90a955",
      gradientTo: "#ecf39e",
    },
  },
  
  purple: {
    name: "Purple Dreams",
    colors: {
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "#2d1b69",
      cardForeground: "#e0e7ff",
      
      primary: "#7c3aed",
      primaryForeground: "#f3f4f6",
      secondary: "#a855f7",
      secondaryForeground: "#1f2937",
      
      accent: "#c084fc",
      accentForeground: "#1f2937",
      muted: "#4c1d95",
      mutedForeground: "#a855f7",
      
      border: "#7c3aed",
      ring: "#a855f7",
      
      gradientFrom: "#6366f1",
      gradientVia: "#a855f7",
      gradientTo: "#ec4899",
    },
  },
  
  blue: {
    name: "Ocean Blue",
    colors: {
      background: "#0a0a0a",
      foreground: "#fafafa",
      card: "#1e3a8a",
      cardForeground: "#dbeafe",
      
      primary: "#3b82f6",
      primaryForeground: "#f8fafc",
      secondary: "#60a5fa",
      secondaryForeground: "#1e293b",
      
      accent: "#93c5fd",
      accentForeground: "#1e293b",
      muted: "#1e40af",
      mutedForeground: "#60a5fa",
      
      border: "#3b82f6",
      ring: "#60a5fa",
      
      gradientFrom: "#1d4ed8",
      gradientVia: "#3b82f6",
      gradientTo: "#06b6d4",
    },
  },
};

export const defaultTheme = "green";
