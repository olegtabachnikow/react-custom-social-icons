import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
export default defineConfig({
  plugins: [react(), svgr()],
  build: {
    lib: {
      entry: './index.js',
      name: 'react-custom-social-icons',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
});
