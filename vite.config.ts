import * as path from 'path';

import { UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

export function getBaseViteConfig(dirname: string, override?: UserConfigExport): UserConfigExport {
  const isExternal = (id: string) => !id.startsWith('.') && !path.isAbsolute(id);

  return {
    resolve: {
      alias: {
        '@settle-ui/*': path.resolve(__dirname, './src/**/src/*'),
      },
    },
    esbuild: {
      jsxInject: "import React from 'react'",
    },
    build: {
      lib: {
        entry: path.resolve(dirname, 'src/index.ts'),
        formats: ['es'],
      },
      outDir: '../lib',
      rollupOptions: {
        external: isExternal,
      },
    },
    plugins: [dts()],
    ...override,
  };
}
