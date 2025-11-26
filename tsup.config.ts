import { defineConfig } from "tsup";
import path from "path";

export default defineConfig([
  // Main library entry
  {
    entry: {
      index: "src/index.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom", "tailwindcss", "next", "hugeicons-react"],
    treeshake: true,
    minify: false,
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      };
      options.alias = {
        "@": path.resolve(process.cwd(), "src"),
      };
    },
    onSuccess: async () => {
      const fs = await import("fs");
      const pathModule = await import("path");
      
      const srcCss = pathModule.join(process.cwd(), "src/app/globals.css");
      const destCss = pathModule.join(process.cwd(), "dist/styles.css");
      
      if (fs.existsSync(srcCss)) {
        fs.copyFileSync(srcCss, destCss);
        console.log("✓ Copied styles.css to dist");
      }
    },
  },
  // Tailwind config entry (no "use client" banner)
  {
    entry: {
      "tailwind.config": "tailwind.config.ts",
    },
    format: ["cjs", "esm"],
    dts: true,
    splitting: false,
    sourcemap: true,
    clean: false,
    external: ["tailwindcss", "tailwindcss-animate"],
    treeshake: true,
    minify: false,
  },
]);

