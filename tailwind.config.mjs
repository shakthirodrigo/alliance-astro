// tailwind.config.mjs
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow-orange': '0 0 20px rgba(249, 115, 22, 0.3)',
        'glow-teal': '0 0 20px rgba(20, 184, 166, 0.3)',
        'glow-orange-lg': '0 0 40px rgba(249, 115, 22, 0.4)',
        'glow-teal-lg': '0 0 40px rgba(20, 184, 166, 0.4)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': "url('data:image/svg+xml,<svg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"none\" fill-rule=\"evenodd\"><g fill=\"%23f97316\" fill-opacity=\"0.1\"><circle cx=\"36\" cy=\"24\" r=\"4\"/><circle cx=\"6\" cy=\"44\" r=\"4\"/><circle cx=\"36\" cy=\"4\" r=\"4\"/></g></g></svg>')",
        'dots-pattern': "url('data:image/svg+xml,<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><g fill=\"%2314b8a6\" fill-opacity=\"0.05\"><circle cx=\"3\" cy=\"3\" r=\"3\"/></g></svg>')",
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
}
