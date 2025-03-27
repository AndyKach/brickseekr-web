import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "./", // <--- ВАЖНО для корректной работы на GoDaddy
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
