import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mds-sans': ['var(--font-roboto-regular)'],
        'mds-sans-cond-med': ['var(--font-roboto-condensed-medium)'],
        'mds-sans-cond-bold': ['var(--font-roboto-condensed-bold)'],
      },
      colors: {
        'mds-grey': {
          50: 'hsl(0 0% 100% / 1)',
          100: 'hsl(0 0% 92% / 1)',
          200: 'hsl(0 0% 81% / 1)',
          300: 'hsl(0 0% 15% / .5)',
          400: 'hsl(0 0% 16% / .6)',
          500: 'hsl(0 0% 28% / 1)',
          600: 'hsl(0 0% 15% / 1)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        'mds-space-1': '.25rem',                // 4px
        'mds-space-2': '.5rem',                 // 8px
        'mds-space-3': '.75rem',                // 12px
        'mds-space-4': '1.25rem',               // 20px
        'mds-space-5': '2rem',                  // 32px
        'mds-space-6': '3.25rem',               // 52px
        'mds-space-7': '5.25rem',               // 84px
        'mds-space-8': '8.5rem',                // 136px
        'mds-hero-card-width': '18.87rem',      // 302px
        'mds-hero-card-width-md': '29.37rem',   // 470px
        'mds-hero-card-width-lg': '27.25rem',   // 436px
        'mds-hero-card-width-xl': '36.37rem',   // 582px
        'mds-hero-card-width-xxl': '39.68rem',  // 635px
        'mds-hero-card-height': '14.18rem',     // 227px
        'mds-hero-card-height-md': '22rem',     // 352px
        'mds-hero-card-height-lg': '19rem',     // 304px
        'mds-hero-card-height-xl': '25.37rem',  // 406px
        'mds-hero-card-height-xxl': '27.62rem', // 442px
      },
      fontSize: {
        'mds-text-1': '.75rem',       // 12px
        'mds-text-2': '.875rem',      // 14px
        'mds-text-3': '1.125rem',     // 18px
        'mds-text-4': '1.5rem',       // 24px
        'mds-text-5': '1.875rem',     // 30px
        'mds-text-6': '2.68rem',      // 43px
        'mds-text-7': '3.75rem',      // 60px
      },
      borderRadius: {
        'mds-rounded-1': '.125rem',   // 2px
        'mds-rounded-2': '.25rem',    // 4px
        'mds-rounded-3': '.5rem'      // 8px
      }
    },
  },
  plugins: [],
};
export default config;
