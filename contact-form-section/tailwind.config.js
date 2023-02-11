/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gw: 'rgba(110, 248, 110, 0.5)',
        ow: 'rgba(248, 153, 52, 0.5)',
        rw: 'rgba(237, 59, 59, 0.5)',
        bw: 'rgba(186, 233, 248, 0.5)',
      },
      boxShadow: {
        gx: '0 0 15px rgba(3, 215, 3, 1)',
        ox: '0 0 15px rgba(248, 130, 12, 1)',
        rx: '0 0 15px rgba(248, 12, 12, 1)',
        bx: '0 0 15px rgba(6, 116, 241, 1)',
      },
    },
  },
  variants: {},
  plugins: [],
};
