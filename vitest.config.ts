import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['src/stories/**', 'node_modules/**', 'src/test/**'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@types': path.resolve(__dirname, './src/types'),
      '@config': path.resolve(__dirname, './src/config'),
      '@engine': path.resolve(__dirname, './src/engine'),
      '@stories': path.resolve(__dirname, './src/stories'),
      '@payment': path.resolve(__dirname, './src/payment'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },
});
