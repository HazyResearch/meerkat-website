/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
        'bitter': ['Bitter', 'serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}