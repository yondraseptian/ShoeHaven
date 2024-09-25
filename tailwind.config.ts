import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
	"./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
		}
  	},
	colors: {
		primary: '#18171C',
		secondary: '#FFFFFF',
		danger: '#EF4444',
	}
  },
};
export default config;
