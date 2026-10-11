/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          50: '#F7F3EB',
          100: '#E9E0D2',
          200: '#D8CEC0',
          300: '#C9BCA8',
          400: '#A89B85',
          500: '#8A7D68',
          600: '#5C5447',
          700: '#3D372D',
          800: '#29241F',
          900: '#29241F',
        },
        terracotta: {
          DEFAULT: '#B76549',
          light: '#C97A5E',
          dark: '#A05539',
        },
        olive: {
          DEFAULT: '#777D5A',
          light: '#8B9170',
          dark: '#646A49',
        },
      },
      letterSpacing: {
        'tightish': '-0.02em',
        'tighter2': '-0.035em',
      },
      maxWidth: {
        'content': '1100px',
        'prose-narrow': '620px',
      },
    },
  },
  plugins: [],
};
