/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-black-solid": "#000",
        "color-grey-97": "#fbf9f5",
        "Colors-Neutral-N700": "#62667f",
        "Colors-Neutral-N800": "#4a4e5e",
        "Color-Elementary-White": "#fff",
        "Colors-Primary-P800": "#3f4e17",
        "Colors-Neutral-N500": "#8d97b0",
        "Colors-Neutral-N200": "#d8dde4",
        "Colors-Primary-P700": "#5f7423",
        "color-grey-92": "#eaeaea",
        "color-grey-71": "#b7b5b1",
        "Colors-Neutral-N600": "#717998",
        "Colors-Neutral-N400": "#a4afc1",
        "unithemerexnet-Mercury": "#eaeaea",
      },
      spacing: {
        "width-1920": "1920px",
        "width-1780": "1780px",
        "width-691-2": "691.2px",
        "width-249-6": "249.6px",
        "width-384": "384px",
        "width-480": "480px",
        "width-345-6": "345.6px",
        "width-129-6": "129.6px",
        "width-630": "630px",
        "width-1440": "1440px",
        "width-172-8": "172.8px",
      },
      fontFamily: {
        "font-family-Font-1": "Lexend Deca",
        "font-family-Font-2": "DM Sans",
      },
      borderRadius: {
        "Corner-Radius-rounded-3xl": "24px",
        "Corner-Radius-rounded-xl": "12px",
        "Corner-Radius-rounded-lg": "8px",
      },
      borderWidth: {
        "stroke-weight-1": "1px",
      },
      opacity: {
        "line-height-20": "0.2",
        "opacity-100": "1",
      },
    },
    fontSize: {
      "font-size-16": "16px",
      "font-size-15": "15px",
      "font-size-14": "14px",
    },
    fontWeight: {
      "font-weight-500": "500",
      "font-weight-400": "400",
    },
    lineHeight: {
      "line-height-19": "19px",
      "font-size-20": "20px",
    },
    letterSpacing: {
      "letter-spacing-1": "1px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
