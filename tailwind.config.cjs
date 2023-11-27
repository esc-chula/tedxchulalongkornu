const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        screen: [
          "96px",
          {
            lineHeight: "1",
            fontWeight: "700",
          },
        ],
        heading: [
          "61px",
          {
            lineHeight: "1",
            fontWeight: "700",
          },
        ],
        subhead: [
          "49px",
          {
            lineHeight: "1",
            fontWeight: "600",
          },
        ],
        title: [
          "31px",
          {
            fontWeight: "500",
          },
        ],
        body: [
          "24px",
          {
            fontWeight: "400",
          },
        ],
        small: [
          "16px",
          {
            fontWeight: "400",
          },
        ],
      },
      colors: {
        TED: {
          red: "#FF2B29",
          yellow: "#E8FA52",
          purple: "#754DF2",
          pink: "#EA76E7",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      display: ["IBM Plex Sans Thai", ...defaultTheme.fontFamily.sans],
      body: ["IBM Plex Sans Thai Looped", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
