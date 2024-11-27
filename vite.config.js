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
        rollupOptions: {
            input: {
                main: 'src/index.html',
                roadmap: 'src/roadmap.html',
                whitepaper: 'src/whitepaper.html',
            }
        }
    },
});
