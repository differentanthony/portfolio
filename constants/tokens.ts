/**
 * Design System Tokens
 * Centralized design tokens for consistent styling across the portfolio
 */

export const tokens = {
  // Colors - Forest Palette
  colors: {
    bg: "#0A0F0A",
    surface: "#122212",
    raised: "#1E3A1E",
    accent: "#2D5A2D",
    hover: "#4A7C4A",
    text: "#C8D8C0",
    heading: "#E8F0E0",
    border: "#1E3A1E",
    borderLight: "#2D5A2D",
    overlayDark: "rgba(10, 15, 10, 0.5)",
    overlayDarker: "rgba(10, 15, 10, 0.92)",
  },

  // Typography
  typography: {
    fontSans: "'DM Sans', system-ui, sans-serif",
    fontMono: "'DM Mono', monospace",
    fontSerif: "'Cormorant Garamond', serif",
    lineHeightTight: 1.08,
    lineHeightBase: 1.5,
    lineHeightRelaxed: 1.7,
    letterSpacingTight: "-0.02em",
    letterSpacingNormal: "0.05em",
    letterSpacingWide: "0.15em",
    letterSpacingWider: "0.18em",
  },

  // Spacing Scale
  spacing: {
    0: "0",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    8: "2rem",
    10: "2.5rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
  },

  // Breakpoints (min-width)
  breakpoints: {
    xs: 320,
    sm: 480,
    md: 640,
    lg: 768,
    xl: 1024,
    "2xl": 1280,
    "3xl": 1536,
    "4xl": 1920,
  },

  // Z-index Scale
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    tooltip: 20,
    fixed: 50,
    navbar: 50,
    modal: 100,
    popover: 100,
  },

  // Border Radius
  radius: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
  },

  // Transitions
  transitions: {
    fast: "0.15s ease",
    base: "0.2s ease",
    normal: "0.3s ease",
    slow: "0.5s ease",
  },

  // Shadows
  shadows: {
    none: "none",
    glow: "0 0 0 1px #2D5A2D, 0 8px 32px rgba(45, 90, 45, 0.15)",
    glowLight: "0 0 0 1px #2D5A2D, 0 4px 16px rgba(45, 90, 45, 0.1)",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
  },

  // Animation
  animations: {
    bounceOffset: "6px",
    bounceDelay: "2s",
  },

  // Container
  container: {
    maxWidth: 1200,
  },

  // Navbar
  navbar: {
    height: 72,
    scrollPaddingTop: 80,
    heightMobile: 64,
  },

  // Section
  section: {
    paddingDesktop: "5rem",
    paddingTablet: "4rem",
    paddingMobile: "3rem",
    paddingMobileSmall: "2rem",
  },

  // Button
  button: {
    minHeight: "44px",
    minHeightTouch: "48px",
  },

  // Gradients (for modern effects)
  gradients: {
    accentGreen: "linear-gradient(135deg, #4A7C4A 0%, #2D5A2D 100%)",
    accentGreenRich: "linear-gradient(135deg, #4A7C4A 0%, #1E3A1E 100%)",
    overlay:
      "linear-gradient(180deg, rgba(10, 15, 10, 0) 0%, rgba(10, 15, 10, 0.8) 100%)",
  },
} as const;

export type Tokens = typeof tokens;
