/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#0346A6', // Bright blue from monitor
                secondary: '#F57C00', // Orange from cat
                background: '#F9FAFB', // Soft off-white background
                surface: '#FFFFFF', // Clean surface white
                accent: '#F57C00', // Use orange for accent as well
                success: '#4CAF50', // Green from bar chart
                text: {
                    primary: '#1C2D47',
                    secondary: '#6C7A92',
                },
                border: '#D1D5DB',
            },
            spacing: {
                xs: '4px',
                sm: '8px',
                md: '16px',
                lg: '24px',
                xl: '32px',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            fontSize: {
                xs: '12px',
                sm: '14px',
                base: '16px',
                lg: '20px',
                xl: '24px',
            },
            fontWeight: {
                regular: '400',
                medium: '500',
                bold: '700',
            },
            borderRadius: {
                sm: '4px',
                md: '8px',
                lg: '12px',
                xl: '16px',
            },
            boxShadow: {
                sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
                md: '0 2px 4px rgba(0, 0, 0, 0.08)',
                lg: '0 4px 8px rgba(0, 0, 0, 0.10)',
            },
        },
    },
    plugins: [],
};
