 // Start Generation Here
import { defineConfig, loadEnv } from 'vite';

function baseURLPlugin(env) {
    return {
        name: 'base-url-plugin',
        transformIndexHtml: (html) => html.replace(/\${VITE_BASE_URL}/g, env.VITE_BASE_URL || 'http://localhost:5173'),
    };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        root: 'src',
        publicDir: '../public',
        plugins: [baseURLPlugin(env)],
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
    };
});
