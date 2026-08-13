/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'league-green': '#7CFF00',
        'league-yellow': '#FFD700',
        'league-dark': '#0a0a0a',
        'league-card': '#1a1a1a',
        // F1 Team Colors
        'team-mercedes': '#00D2BE',
        'team-redbull': '#0600EF',
        'team-ferrari': '#DC0000',
        'team-mclaren': '#FF8700',
        'team-aston': '#006C3E',
        'team-alpine': '#0093D0',
        'team-haas': '#FFFFFF',
        'team-alfa': '#C92D4B',
        'team-williams': '#0082FA',
        'team-kick': '#64C4FF',
        'team-racingpoint': '#FF69B4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
