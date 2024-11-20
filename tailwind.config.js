/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: ['class','[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        "quicksand": "'Quicksand', sans-serif",
      },
      backgroundImage: {
        "resume": "url('../assets/background.jpg')",
      },
      colors: {      
        "background": "#f5f7ff",        
        "dark-background": "#111827",
        "section-background": "#f0f2fa",
        "dark-section-background":"#3E4A59",
        
        "dark-main-background": "#313940",
        "main-background": "#ffffff",        
        "badge-background": "#E5E7EB",        
        "dark-badge-background": "#313940", 
        "download-background": "#2563EB",        
        "dark-text": "#9CA3AF",        
        "dark-h2": "#9CA3AF"
      },
    },
  },
  plugins: [],
}

