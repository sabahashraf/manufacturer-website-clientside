module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      /*  {
        mytheme: {
          tertiary: "#37cdbe",
        },
      }, */
      "lemonade",
      "emerald",
    ],
  },
  plugins: [require("daisyui")],
};
