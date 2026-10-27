const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js for Asec
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    '../../layouts/**/*.html',
    '../../content/**/*.md',
    '../../assets/**/*.js',
    '../../static/**/*.html'
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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#1E293B',
            '--tw-prose-headings': '#0B2545',
            '--tw-prose-lead': '#555F6B',
            '--tw-prose-links': '#0070C0',
            '--tw-prose-bold': '#0B2545',
            '--tw-prose-counters': '#555F6B',
            '--tw-prose-bullets': '#00B0F0',
            '--tw-prose-hr': '#B7C7D9',
            '--tw-prose-quotes': '#0B2545',
            '--tw-prose-quote-borders': '#00B0F0',
            '--tw-prose-captions': '#555F6B',
            '--tw-prose-code': '#0070C0',
            '--tw-prose-pre-code': '#7CE0FF',
            '--tw-prose-pre-bg': '#051428',
            '--tw-prose-th-borders': '#B7C7D9',
            '--tw-prose-td-borders': '#E2E8F0',
          },
        },
      }),
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("@tailwindcss/typography")],
};
