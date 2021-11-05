module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#fbeeca",
      // 'secondary': '#ffed4a',
      // 'danger': '#e3342f',
    }),
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
    fontFamily: {
      sans: "Andika New Basic, sans-serif",
    },
  },
  variants: {
    animation: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [require("@tailwindcss/forms")],
};
