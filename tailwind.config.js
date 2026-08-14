/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      'primary': '#0D48A1',
      'secondary': '#1576FF',
      'tetiary': '#99C5FF',
      'hover-blue': '#062A66',
      'hitam': '#1F2227',
      'putih': "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "ornamen": "url('/src/assets/img/ornamen/teksture 1.png')",
      },
      width: {
        'navfot': '95%',
        'konten': '90%',
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}

