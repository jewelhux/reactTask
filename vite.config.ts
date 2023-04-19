/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__tests__/setup_test.ts',
    coverage: {
      provider: 'c8',
      all: true,
      include: ['src/**/*'],
      exclude: ['src/**/*d.ts', 'src/**/*.test.*', 'src/**/interface.ts'],
    },
  },
});
