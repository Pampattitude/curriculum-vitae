import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import * as mdPlugin from "vite-plugin-markdown";
import { analyzer } from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    mdPlugin.plugin({
      mode: [
        mdPlugin.Mode.REACT,
        mdPlugin.Mode.HTML,
        mdPlugin.Mode.MARKDOWN,
        mdPlugin.Mode.TOC,
      ],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    tailwindcss(),
    react(),
    process.env.ANALYZE ? analyzer() : null,
  ].filter((c) => c),
  server: {
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
    },
  },
  build: {
    emptyOutDir: true,
    minify: process.env.NODE_ENV === "prod" ? "esbuild" : false,
    cssMinify: process.env.NODE_ENV === "prod" ? "esbuild" : false,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          preact: ["preact"],
        },
      },
    },
  },
});
