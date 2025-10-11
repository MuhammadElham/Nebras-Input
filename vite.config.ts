import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/app/variables.scss";
          @import "@/styles/app/mixins.scss";
          @import "@/styles/app/typography.scss";
          @import "@/styles/app/base/flex.scss";
        `,
      },
    },
  },
});
