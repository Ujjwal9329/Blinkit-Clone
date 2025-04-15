import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,  // Disable the error overlay to prevent UI disruption
    },
    // Ensure paths are handled correctly
    watch: {
      usePolling: true,  // Use polling to watch for file changes (especially helpful on Windows)
    },
  },
  build: {
    // You can also include build-specific options if needed
    sourcemap: true,  // Enable sourcemaps for better debugging
  },
  resolve: {
    alias: {
      '@': '/src',  // Add your project-specific aliases if any
    },
  },
});
