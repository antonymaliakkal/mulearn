import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssNesting from "postcss-nesting";
import path from "path";
import viteCompression from "vite-plugin-compression";
// import eslint from 'vite-plugin-eslint'

export default defineConfig({
    css: {
        postcss: {
            plugins: [postcssNesting]
        }
    },
    // this will throw errors in build, so fix them before uncommenting
    // plugins: [eslint(), react(), viteCompression()],
    plugins: [react(), viteCompression()],
    resolve: {
        alias: {
            "@/MuLearnComponents": `${path.resolve(
                __dirname,
                "./src/components/MuComponents"
            )}`,
            "@/MuLearnServices": `${path.resolve(__dirname, "./src/services")}`
        }
    },
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: "[name].js"
            }
        }
    },
    server: {
        port: 5173,
        proxy: {
          '/api': {
            target: 'https://dev.mulearn.org',
            changeOrigin: true,
            secure: false,
            ws: true,
            // Remove CORS headers from proxy responses
            configure: (proxy, _options) => {
              proxy.on('proxyRes', (proxyRes, req, _res) => {
                // Remove CORS headers from the proxied response
                delete proxyRes.headers['access-control-allow-origin'];
                delete proxyRes.headers['access-control-allow-credentials'];
                delete proxyRes.headers['access-control-allow-methods'];
              });
            }
          }
        }
      }
});
