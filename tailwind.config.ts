import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/util/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      lineClamp: {
        '8': '8', 
        '15': '15', 
      },
      colors: {
        mwnavy: {
          100: "#ccd2dd",
          200: "#99a5bb",
          300: "#66789a",
          400: "#334b78",
          500: "#001e56",
          600: "#001845",
          700: "#001234",
          800: "#000c22",
          900: "#000611"
        },
        mwred: {
          100: "#efd2d7",
          200: "#dea4ae",
          300: "#ce7786",
          400: "#bd495d",
          500: "#ad1c35",
          600: "#8a162a",
          700: "#681120",
          800: "#450b15",
          900: "#23060b"
        },
        mwblack: {
          100: "#d4d5d5",
          200: "#aaabac",
          300: "#7f8082",
          400: "#555659",
          500: "#2a2c2f",
          600: "#222326",
          700: "#191a1c",
          800: "#111213",
          900: "#080909"
        },
        midnight: '#121063',
        copper: '#b87333',
        bronze: '#565584',
        silver: '#ecebff',
        gold: '#f7f7ff',
        platinum: '#ffffff',
        onyx: '#000000',
        obsidian: '#464646',
        diamond: '#b9f2ff',
        pearl: '#f0f0ff',
        amethyst: '#9966cc',
        emerald: '#50c878',
        ruby: '#e0115f',
        citrine: '#e4d00a',
        sapphire: '#0f52ba',
        topaz: '#ffc87c',
        coffee: '#6f4e37',
        cedar: '#4a3728',
        caramel: '#af6e4d',
        ginger: '#b06500',
        hazel: '#8e7618',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        74: '18.5rem',
        78: '19.5rem',
        82: '20.5rem',
        84: '21.0rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '24.5rem',
        100: '25rem',
        102: '25.5rem',
        104: '26rem',
        106: '26.5rem',
        108: '27rem',
        110: '27.5rem',
        112: '28rem',
        114: '28.5rem',
        116: '29rem',
        118: '29.5rem',
        120: '30rem',
        122: '30.5rem',
        124: '31rem',
        126: '31.5rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require("tailwindcss-animate")],
}
export default config
