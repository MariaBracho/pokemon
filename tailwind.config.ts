import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'outline-primary': '#474747',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        rainbow:
          'linear-gradient(45deg,rgba(0, 113, 255, 1),rgba(36, 253, 132, 1),rgba(177, 235, 59, 1),rgba(245, 169, 59, 1),rgba(255, 99, 194, 1))',
      },
      fontFamily: {
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#4338CA',
          secondary: '#010101',
          accent: '#37cdbe',
          neutral: '#3d4451',
          'base-100': '#010101',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
