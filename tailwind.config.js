import animatePlugin from 'tailwindcss-animate';
import { tailwindPlugin } from './src/lib/plugins/tailwind';

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [tailwindPlugin, animatePlugin],
};

export default tailwindConfig;
