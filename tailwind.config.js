/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#D2451E",
        green: "#008849",
        beige: "#EAF0DB",
        yellow: "#e8ca66",
        darkGreen: "#004318",
        lightGreen: "#2dab5a",
        darkYellow: "#8B7016",
        textGreen: "#C5E1CD",
        beige2: "#EBF0DE",
        stepsBg: "#efeff3",
        inputBg: "#fbfbfc",
        grey: "#191b19",
        lightGrey: "#dadde0",
        stepsBorder: "#BFDAD1",
        stepsText: "#727472",
        textColor: "#9ca3af",
        modalBg: "#EFEFF3",
        modalButtonBg: "#404340",
        buttonText: "#404340",
        offerText: "#555555"
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xxxs: "331px",
      xxs: "350px",
      xss: "410px",
      xs: "500px",
      sss: "511px",
      ss: "580px",
      sm: "768px",
      md: "993px",
      lg: "1100px",
      xl: "1200px",
      xxl: "1300px",
    },
  },
  plugins: [],
};
