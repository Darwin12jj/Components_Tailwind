/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./*.{html,js}",
     "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      width: {
        '221': '414px',
      },

      height: {
        '129': '129px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}