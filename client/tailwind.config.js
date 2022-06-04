module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /./,
    },
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          // teal-green
          primary: "#a7f3d0",
          "primary-focus": "#48604f",
          "primary-content": "#27543f",
          // light purple
          secondary: "#a5b4fc",
          "secondary-focus": "#cde2c1",
          "secondary-content": "#333333",
          // red-pink
          accent: "#ffbd9b",
          "accent-focus": "#f4bebe",
          "accent-content": "#333333",
          // light pastel blue-green
          neutral: "#ccfbf1",
          "neutral-focus": "#272525",
          "neutral-content": "#333333",
          // shades of light greys
          "base-100": "#ffffff",
          "base-200": "#f3f4f6",
          "base-300": "#e5e7eb",
          "base-content": "#1c1c1c",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": "0.5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
