/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%': {
            transform: 'translateY(-100%)',
            AnimationPlaybackEvent: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            AnimationPlaybackEvent: 'cubic-bezier(0.8, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        shows: 'wiggle 2s linear',
      },
      fontSize: {
        title: 'sm:text-1xl md:text-3xl lg:text-4xl',
        text: '2xl',
        nav: 'xl',
        subtitle: '3xl',
        sm: 'md:4rem',
      },
    },
  },
  plugins: [],
};
