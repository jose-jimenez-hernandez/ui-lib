import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(), dts()],
  resolve: {
    alias: {
      '@api': path.resolve(__dirname, './src/core'),
      '@core': path.resolve(__dirname, './src/api'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    sourcemap: true,

    lib: {
      formats: ['es' , 'cjs' , 'umd'],
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'settle-ui',
      fileName: (format) => `settle-ui.${format}.js`,
    },
    outDir: 'lib'
  },
});
