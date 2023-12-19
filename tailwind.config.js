/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["cupcake", "night"],
  },
  theme: {
    extend: {
      colors: {
        bgColor_darkgreen: "#283A45",
        primaryColor_green: "#2A9D8F",
        secondaryColor_red: "#A16171",
        accentColor_yellow: "#E9C46A",
      },
      screens: {
        smallmobile: "320px",
        // => @media (min-width: 320px) { ... }

        mobile: "375px",
        // => @media (min-width: 375px) { ... }

        tablet: "769px",
        // => @media (min-width: 768px) { ... }

        laptop: "900px",
        // => @media (min-width: 1000px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        bigdesktop: "1440px",
      },
    },
  },
  plugins: [require("daisyui")],
};
