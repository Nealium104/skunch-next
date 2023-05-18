/** @type {import('tailwindcss').Config} */

module.exports = {
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          "primary": "#C90202",  // Red
          "secondary": "#EEEEEE",  // White
          "accent": "#000000",  // Black
          "neutral": "#333333",  // Dark gray
          "base-100": "#FFFFFF",  // Light gray
          "base-200": "#CCCCCC", // White
          "info": "#3498DB",  // Blue
          "success": "#27AE60",  // Green
          "warning": "#F39C12",  // Orange
          "error": "#E74C3C"  // Reddish-orange
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "cupcake",
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {

        }
      },
      fontFamily: {
        sans: ["var(--font-oswald)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      },
    },
  },
  plugins: [require("daisyui")],
}
