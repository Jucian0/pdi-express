import { theme } from "@chakra-ui/core";

const breakpoints: any = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];


export const customTheme = {
   ...theme,
   colors: {
      ...theme.colors,
      brand: {
         900: "#1a365d",
         800: "#153e75",
         700: "#2a69ac",
      },
   },
   breakpoints
};

export const defaultTheme = {
   breakpoints: ["30em", "48em", "62em", "80em"],
   fonts: {
      heading: '"Avenir Next", sans-serif',
      body: "'Roboto',system-ui, sans-serif",
      mono: "Menlo, monospace",
   },
   fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
   },
};