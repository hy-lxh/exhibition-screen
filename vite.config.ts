import { PluginOption, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mockDevServerPlugin from 'vite-plugin-mock-dev-server';
export default ({ mode }: { mode: string }) => {
    const plugins: PluginOption[] = [react()];
    const { VITE_USE_MOCK, VITE_API_PREFIX } = loadEnv(mode, process.cwd());
    if (VITE_USE_MOCK) {
        plugins.push(
            mockDevServerPlugin({
                prefix: '^' + VITE_API_PREFIX,
                include: 'src/mock/**/*.mock.{ts,js,cjs,mjs,json,json5}',
            }),
        );
    }
    return {
        plugins,
        resolve: {
            alias: {
                '@/': './src/',
            },
            extensions: ['.tsx', '.ts'],
        },
        css: {
            preprocessorOptions: {
                less: {
                    javascriptEnabled: true,
                    additionalData: '@import "@/common/vari.less";',
                },
            },
        },
        server: {
            proxy: {
                '^/api': {
                    target: '',
                },
            },
        },
    };
};
