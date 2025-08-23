import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/Portofoliu-/",
  root: ".", // корень проекта
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        lofthouse: resolve(__dirname, "dev-lofthouse/src/lofthouse.html"),
        panto: resolve(__dirname, "dev-panto/src/panto.html"),
        go_travel: resolve(__dirname, "dev-gotravel/src/go_travel.html"),
        
      },
    },
  },
});