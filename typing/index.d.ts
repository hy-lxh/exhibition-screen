type VoidFn<T = void> = () => T;

type HttpResponse<T> = {
    success: boolean;
    data: T;
};

interface SeriesData {
    name: string;
    value: number;
    color?: string;
}

interface Log {
    peopleName: string;
    peopleTel: string;
    peopleCity: string;
    openType: string;
    time: number;
}

interface OfficeNumData {
    officeNum: number;
    coveringNum: number;
}
