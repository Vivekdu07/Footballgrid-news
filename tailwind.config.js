/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
          300: '#cbd5e1',
          100: '#f1f5f9',
        },
        red: {
          500: '#ef4444',
        }
      }
    },
  },
  plugins: [],
}
