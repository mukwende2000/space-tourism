/** @type {import('tailwindcss').Config} */
export default {
    content: ['index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                bellefair: ['Bellefair', 'sans-serif'],
                barlow: ['Barlow Condensed', 'sans-serif'],
            },
            colors: {
                primary: 'rgb(var(--clr-primary))',
                secondary: 'rgb(var(--clr-secondary))',
                tertiary: 'rgb(var(--clr-tertiary))',
            },
            fontSize: {
                150: '150px',
                100: '100px',
                56: '56px',
                32: '32px',
                28: '28px',
                16: '16px',
                14: '14px',
            },
        },
    },
    plugins: [],
}
