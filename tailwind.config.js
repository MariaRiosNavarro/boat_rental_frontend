/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          "base-100": "#FFFADD",
          primary: "#22668D",
          secondary: "#8ECDDD",
          accent: "#FFCC70",
        },
      },
    ],
  },
  theme: {
    extend: {
      colors: {
        bgColor: "#FFFADD",
        primaryColor: "#22668D",
        secondaryColor: "#8ECDDD",
        accentColor: "#FFCC70",
        logoColor: "#556074",
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
        // => @media (min-width: 1440px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
