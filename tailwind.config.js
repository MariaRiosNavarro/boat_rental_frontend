/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["pastel", "dim"],
  },
  theme: {
    extend: {
      // colors: {
      //   bgColor: "#EEF8F6D",
      //   primaryColor: "#86E6EE",
      //   secondaryColor: "#B8FDED",
      //   accentColor: "#F4D4DE",
      // },
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
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
