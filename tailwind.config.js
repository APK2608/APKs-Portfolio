/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      colors: {
        background: "#050505",
        "background-2": "#080808",
        "background-3": "#0B0B0B",
        accent: "#00d4ff",
        "accent-dim": "rgba(0,212,255,0.3)",
        glass: "rgba(255,255,255,0.05)",
        "glass-border": "rgba(255,255,255,0.1)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "spin-slow": "spin 20s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "vapor": "vapor 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        vapor: {
          "0%": { opacity: "1", filter: "blur(0px)", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", filter: "blur(12px)", transform: "translateY(-30px) scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
}
