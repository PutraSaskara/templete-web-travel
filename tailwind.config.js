/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                accent: "var(--color-accent)",
                background: "var(--color-background)",
                surface: "var(--color-surface)",
                text: "var(--color-text)",
            },
            borderRadius: {
                DEFAULT: "var(--radius)",
            },
            fontFamily: {
                display: "var(--font-display)",
                body: "var(--font-body)",
            },
            animation: {
                'fadeIn': 'fadeIn 0.6s ease-out',
                'fadeInUp': 'fadeInUp 0.6s ease-out',
                'fadeInDown': 'fadeInDown 0.6s ease-out',
                'slideInLeft': 'slideInLeft 0.6s ease-out',
                'slideInRight': 'slideInRight 0.6s ease-out',
                'scaleUp': 'scaleUp 0.5s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
                'bounceIn': 'bounceIn 0.6s ease-out',
                'shimmer': 'shimmer 2s linear infinite',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
