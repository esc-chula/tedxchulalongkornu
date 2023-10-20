const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
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
