// module.exports = {
//   // ...
//   purge: {
//     content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
//   },
//   // ...
//   plugins: [require("daisyui")],

// };

// /** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};