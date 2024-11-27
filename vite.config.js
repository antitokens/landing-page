 // Start Generation Here
import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src',
    publicDir: '../public',
    plugins: [],
    server: {
        history: {
            fallback: true
        }
    },
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                main: 'src/index.html',
                whitepaper: 'src/whitepaper/index.html',
            }
        }
    },
});
