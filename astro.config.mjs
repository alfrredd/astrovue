// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Import the integration

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()], // Add the integration here
  // Remove the manual Vite configuration for Tailwind
  // vite: {
  //   plugins: [tailwindcss()] // This is no longer needed with the integration
  // }
});
