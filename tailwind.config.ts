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
          50: 'hsla(0, 0, 100%, 100%)',
          100: 'hsla(0, 0, 92%, 100%)',
          200: 'hsla(0, 0, 81%, 100%)',
          300: 'hsla(0, 0, 15%, 50%)',
          400: 'hsla(0, 0, 16%, 60%)',
          500: 'hsla(0, 0, 28%, 100%)',
          600: 'hsla(0, 0, 15%, 100%)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        // Fibonacci spacing using 4 as unit value: 4, 8, 12, 20, 32, 52, 84, 136
        'mds-space-1': '1rem',
        'mds-space-2': '2rem',
        'mds-space-3': '3rem',
        'mds-space-4': '5rem',
        'mds-space-5': '8rem',
        'mds-space-6': '13rem',
        'mds-space-7': '21rem',
        'mds-space-8': '34rem',
      },
      fontSize: {
        'mds-text-1': '3rem',
        'mds-text-2': '3.5rem',
        'mds-text-3': '4.5rem',
        'mds-text-4': '6rem',
        'mds-text-5': '7.5rem',
        'mds-text-6': '10.75rem',
        'mds-text-7': '15rem',
      },
      borderRadius: {
        'mds-rounded-1': '.5rem',
        'mds-rounded-2': '1rem',
        'mds-rounded-3': '2rem'
      }
    },
  },
  plugins: [],
};
export default config;
