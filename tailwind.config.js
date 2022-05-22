module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'openSans': ['Open Sans', 'sans-serif'],
        'iBM Plex': ['IBM Plex Sans', 'serif'],
        'libreBasker': ['Libre Baskerville', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif']
      },
      //       font-family: '', ;
      // font-family: '', serif;
      // font-family: '', sans-serif;
      // font-family: '', sans-serif;
    },
  },
  daisyui: {
    themes: [
      {
        carpenco: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
