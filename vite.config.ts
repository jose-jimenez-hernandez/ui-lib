import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { splitVendorChunkPlugin } from 'vite';
import * as path from 'path';
import dts from 'vite-plugin-dts';
import { UserConfigExport } from 'vite';

export function getBaseViteConfig(dirname: string, override?: UserConfigExport): UserConfigExport {
  const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

  const { name, version } = require(dirname + '/package.json');

  const packageName = dirname.slice(dirname.lastIndexOf('/'));

  return {
    resolve: {
      alias: {
        '@settle-ui': path.resolve(__dirname, './lib/'),
      },
    },
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    optimizeDeps: {
      include: ['linked-dep'],
    },
    build: {
      lib: {
        entry: path.resolve(dirname, 'src/index.ts'),
        formats: ['es', 'cjs'],
        fileName: 'index',
        name: packageName,
      },
      outDir: '../../lib' + packageName,
      rollupOptions: {
        external: isExternal,
      },
      commonjsOptions: {
        include: [/linked-dep/, /node_modules/],
      },
      define: {
        pkgJson: { name, version },
      },
    },
    plugins: [react(), splitVendorChunkPlugin(), dts()],
    ...override,
  };
}

// export default defineConfig(getBaseViteConfig(__dirname));
