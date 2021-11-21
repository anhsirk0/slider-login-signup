module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: 100,
      },

      keyframes: {
        show: {
          "0%, 49.99%": { opacity: 0, "z-index": 10 },
          "50%, 100%": { opacity: 1, "z-index": 50 },
        },
      },

      animation: {
        show: "show 0.7s",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
