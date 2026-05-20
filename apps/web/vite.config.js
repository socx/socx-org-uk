import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5172,
    strictPort: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 5172,
    strictPort: true,
    allowedHosts: ['www.socx.org.uk', 'socx.org.uk', 'localhost', '127.0.0.1'],
  },
});
