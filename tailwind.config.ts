import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

  },
  plugins: [
    nextui({
      defaultTheme: 'light',
      themes: {
        light: {
          layout: {
            boxShadow: {
              small: '0px 8px 25px rgba(0,0,0,0.02)',
              medium:'0px 8px 25px rgba(0,0,0,0.08)'
            }
          },
          colors: {
            background: '#f8f8f8',
            focus: '#FFA16C',
            primary: {
              DEFAULT: '#fe7439',
              foreground: "#fff",
            }
          }
        }
      }
    }),
  ],
};
export default config;