module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        phone: { max: "640px" },
        // => @media (max-width: 640px) { ... }

        tab: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        "lg-tab": { max: "1024px" },
        // => @media (max-width: 1024px) { ... }

        "sm-laptop": { max: "1280px" },
        // => @media (max-width: 1280px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
