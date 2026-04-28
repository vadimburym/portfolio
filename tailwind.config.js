/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 80px rgba(4, 12, 28, 0.45)',
        glow: '0 0 40px rgba(74, 222, 255, 0.12)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 38%), radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.18), transparent 26%), radial-gradient(circle at 20% 80%, rgba(76, 29, 149, 0.22), transparent 28%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGrid: {
          '0%, 100%': { opacity: '0.22' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseGrid: 'pulseGrid 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
