/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_USE_MOCK: boolean;
    VITE_API_PREFIX: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
