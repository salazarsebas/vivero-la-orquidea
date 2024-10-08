/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#8E6BB3',    // Morado claro
        secondary: '#D4AF37',  // Dorado
        background: '#F9F7FC', // Fondo claro
        text: '#333333',       // Texto oscuro
        'dark-bg': '#2D2D2D',  // Fondo oscuro para modo oscuro
        'dark-text': '#E0E0E0' // Texto claro para modo oscuro
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}