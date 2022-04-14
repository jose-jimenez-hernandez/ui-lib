import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';
import { UserConfigExport } from 'vite';

export function getBaseViteConfig(dirname: string, override?: UserConfigExport): UserConfigExport {
  const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

  return {
    resolve: {
      alias: {
        '@settle-ui': path.resolve(__dirname, './src/'),
      },
    },
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, 'src/index.ts'),
        formats: ['es', 'cjs'],
        fileName: 'index',
      },
      outDir: './lib/',
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [react(), splitVendorChunkPlugin(), dts()],
    ...override,
  };
}
