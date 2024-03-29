import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@components': path.resolve(__dirname, 'src/shared/components'),
            '@constants': path.resolve(__dirname, 'src/shared/constants'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@redux': path.resolve(__dirname, 'src/redux'),
            '@types': path.resolve(__dirname, 'src/types'),
            '@api': path.resolve(__dirname, 'src/shared/api'),
            '@utils': path.resolve(__dirname, 'src/shared/utils'),
        },
    },
});
