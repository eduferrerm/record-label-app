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
        'mds-space-1': '1rem',    // 4px
        'mds-space-2': '2rem',    // 8px
        'mds-space-3': '3rem',    // 12px
        'mds-space-4': '5rem',    // 20px
        'mds-space-5': '8rem',    // 32px
        'mds-space-6': '13rem',   // 52px
        'mds-space-7': '21rem',   // 84px
        'mds-space-8': '34rem',   // 136px
      },
      fontSize: {
        'mds-text-1': '3rem',     // 12px
        'mds-text-2': '3.5rem',   // 14px
        'mds-text-3': '4.5rem',   // 18px
        'mds-text-4': '6rem',     // 24px
        'mds-text-5': '7.5rem',   // 30px
        'mds-text-6': '10.75rem', // 43px
        'mds-text-7': '15rem',    // 60px
      },
      borderRadius: {
        'mds-rounded-1': '.5rem', // 2px
        'mds-rounded-2': '1rem',  // 4px
        'mds-rounded-3': '2rem'   // 8px
      }
    },
  },
  plugins: [],
};
export default config;
