import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    host: "0.0.0.0",          // Listen on all interfaces (Crostini port-forwarding)
    port: 5173,
    strictPort: true,         // Fail instead of silently switching ports
    open: false,              // Don't auto-open browser (useful on ChromeOS)
    hmr: {
      host: "localhost",      // HMR connects through localhost on the host side
      clientPort: 5173,       // Match the forwarded port
    },
    watch: {
      usePolling: true,       // Reliable file watching on Crostini/VM mounts
      interval: 100,          // Poll every 100ms
    },
  },
});