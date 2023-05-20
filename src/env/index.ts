const { NODE_ENV } = import.meta.env;

export const dev = NODE_ENV === 'development';
