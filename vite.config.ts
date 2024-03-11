import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "./src/main.ts", // adjust the entry file as per your project structure
      name: "VueKTDEV",
      fileName: (format) => `vue-ktdev.${format}.js`,
      formats: ["es", "cjs", "umd"],
    },
    rollupOptions: {
      // Make sure to externalize Vue to prevent it from being bundled
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
