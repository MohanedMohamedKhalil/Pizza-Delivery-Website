/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono , monospace", //override
    }, // in extend we add more property but in theme we ovrride all property
    extend: {
      colors: {
        pizza: "#123456", // add to colors array
      },
      height: {
        screen: "100dvh", //ovrride h-screen : 100vh to dynamic viewport height
      },
    },
  },
  plugins: [],
};
