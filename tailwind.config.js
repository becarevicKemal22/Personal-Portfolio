/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#242A2E",
                white: "#ffffff",
                primary: {
                    DEFAULT: "#39938D",
                    dark: "#32817B",
                    light: "#3b9992",
                },
            },
            fontFamily: {
                'inter': 'Inter',
                'open-sans': '"Open Sans"'
            }
        },
    },
    plugins: [],
}

