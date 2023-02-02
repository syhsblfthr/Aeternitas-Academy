/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      "4k": "3500px"
    },
    extend: {
      animation: {
        "fade-up": "fade-up 1s ease-out forwards",
        "title-change": "title-change 500ms ease-out forwards",
        "title-back": "title-back 500ms ease-out forwards",
        "bg-in": "bg-in 500ms ease-out forwards",
        "desc-change": "desc-change 500ms ease-out forwards",
        "desc-back": "desc-back 500ms ease-out forwards",
        "menu-show": "menu-show 500ms ease-in-out forwards",
        "menu-hide": "menu-hide 500ms ease-out forwards",
        "menu-item-show": "menu-item-show 500ms ease-out forwards",
        "menu-item-hide": "menu-item-hide 500ms ease-out forwards"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(20%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0%)"
          }
        },
        "title-back": {
          "0%": {
            opacity: 0,
            fontSize: "8rem",
          },
          "100%": {
            opacity: 1,
            fontSize: "8rem",
          }
        },
        "title-change": {
          "0%": {
            opacity: 0,
            fontSize: "6rem",
            top: "0%"
          },
          "100%": {
            opacity: 1,
            fontSize: "6rem",
            top: "-10%"
          }
        },
        "bg-in": {
          "0%": {
            opacity: 0,
            backgroundPosition: "center 40%"
          },
          "100%": {
            opacity: 1,
            backgroundPosition: "center center"
          }
        },
        "desc-change": {
          "0%": {
            opacity: 0,
            fontSize: "3rem",
            left: "90%",
            top: "0%"
          },
          "100%": {
            opacity: 1,
            fontSize: "3rem",
            left: "90%",
            top: "-10%"
          }
        },
        "desc-back": {
          "0%": {
            opacity: 0,
            fontSize: "4.5rem",
            left: "30%",
            top: "-10%"
          },
          "100%": {
            opacity: 1,
            fontSize: "4.5rem",
            left: "30%",
            top: "0%"
          }
        },
        "menu-show": {
          "0%": {
            top: "-100vh"
          },
          "100%": {
            top: "0vh"
          }
        },
        "menu-hide": {
          "0%": {
            top: "0vh"
          },
          "100%": {
            top: "-100vh"
          }
        },
        "menu-item-show": {
          "0%": {
            opacity: 0,
            transform: "translateX(-20%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0%)"
          }
        },
        "menu-item-hide": {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
            transform: "translateX(-20%)"
          }
        }
      }
    },
  },
  plugins: [],
}
