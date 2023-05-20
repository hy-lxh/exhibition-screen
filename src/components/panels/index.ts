import { dev } from '@/env/index.ts';

export const getPanelData = <T>(
    getDataFn: VoidFn<Promise<{ data: HttpResponse<T> }>>,
    defaultData: T,
) =>
        new Promise<T>((resolve) => {
            if (dev) {
                getDataFn()
                    .then(({ data: { success, data } }) => {
                        if (success) {
                            resolve(data);
                        } else {
                            return Promise.reject();
                        }
                    })
                    .catch(() => resolve(defaultData));
            } else {
                resolve(defaultData);
            }
        });
