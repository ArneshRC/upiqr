import { defineConfig } from "@solidjs/start/config";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  ssr: false,
  vite: {
    resolve: {
      alias: {
        "@ui": resolve(__dirname, "./src/components/ui"),
        "@lib": resolve(__dirname, "./src/lib"),
        "@contexts": resolve(__dirname, "./src/contexts"),
        "@constants": resolve(__dirname, "./src/constants"),
        "@services": resolve(__dirname, "./src/services"),
      },
    },
  },
});
