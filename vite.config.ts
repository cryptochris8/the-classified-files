import { defineConfig, build } from 'vite';
import path from 'path';

// Build service worker separately
async function buildServiceWorker() {
  await build({
    configFile: false,
    build: {
      emptyOutDir: false,
      outDir: 'dist',
      lib: {
        entry: path.resolve(__dirname, 'src/sw.ts'),
        name: 'sw',
        formats: ['iife'],
        fileName: () => 'sw.js',
      },
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
    define: {
      'import.meta.env.DEV': 'false',
    },
  });
}

export default defineConfig({
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
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['dompurify'],
        },
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'chunks/[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
  },
  server: {
    port: 5173,
    open: true,
  },
  preview: {
    port: 4173,
  },
  plugins: [
    {
      name: 'build-service-worker',
      closeBundle: async () => {
        if (process.env.NODE_ENV === 'production' || process.argv.includes('build')) {
          await buildServiceWorker();
        }
      },
    },
  ],
});
