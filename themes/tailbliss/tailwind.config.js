const defaultTheme = require('tailwindcss/defaultTheme')
const path = require('path')

module.exports = {
  content: [
    path.join(__dirname, '../../layouts/**/*.html'),
    path.join(__dirname, '../../content/**/*.md'),
    path.join(__dirname, './layouts/**/*.html'),
    path.join(__dirname, './content/**/*.md'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': {
          DEFAULT: '#00B0F0',
          50: '#F0FAFE',
          100: '#E0F5FD',
          200: '#B8E9FB',
          300: '#85D7F8',
          400: '#38C1F3',
          500: '#00B0F0',
          600: '#0090C5',
          700: '#00709B',
          800: '#005374',
          900: '#0B2545'
        },
        'asec': {
          'navy-deep': '#0B2545',
          'navy-mid': '#081C36',
          'navy-abyss': '#051428',
          'cyan': '#00B0F0',
          'cyan-hover': '#33C3F7',
          'blue': '#0070C0',
          'blue-hover': '#005A9E',
          'ice': '#EAF3FB',
          'zebra': '#F3F7FB',
          'scen2': '#DCE9F5',
          'scen3': '#D8F0EC',
          'amber': '#FDF3E6',
          'steel': '#B7C7D9',
          'muted': '#555F6B'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Segoe UI', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', ...defaultTheme.fontFamily.mono]
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
