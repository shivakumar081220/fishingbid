<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:5000', '/uploads': 'http://localhost:5000' } }
});
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 5173, proxy: { '/api': 'http://localhost:5000', '/uploads': 'http://localhost:5000' } }
});
>>>>>>> f6c02a5868508e540075ced1d6bb233659be5fbf
