import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    // Image optimization
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
          },
          {
            name: "removeEmptyAttrs",
            active: false,
          },
        ],
      },
    }),
    // Gzip compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    // Bundle analyzer
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  build: {
    // Basic build options
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    minify: "terser",
    target: "es2015",
    reportCompressedSize: true,

    // Asset handling
    assetsInlineLimit: 4096, // 4kb

    rollupOptions: {
      output: {
        // Asset file naming
        assetFileNames: "assets/[hash][extname]",
        chunkFileNames: "assets/[hash].js",
        entryFileNames: "assets/[hash].js",

        // Combine vendor chunks
        manualChunks: (id) => {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },

    // Performance optimizations
    chunkSizeWarningLimit: 1000,
  },

  // Development server options
  server: {
    port: 3000,
    open: true,
    cors: true,
    compress: true,
  },

  // Optimization options
  optimizeDeps: {
    include: ["react", "react-dom"], // Add your major dependencies here
  },

  // Enable faster builds in development
  esbuild: {
    jsxInject: `import React from 'react'`, // Optional: auto-import React
  },
});
