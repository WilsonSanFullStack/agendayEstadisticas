import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#D4AF37',    // (Oro metálico)
        secondary: '#9B59B6',  // (Púrpura)
        text: '#ECF0F1',       // (Gris claro casi blanco)
        highlight: '#3498DB',  //  (Azul brillante)
      },
    },
  },
  plugins: [],
} satisfies Config;
