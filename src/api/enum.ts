export const api_prefix = import.meta.env.VITE_API_PREFIX;

export enum API {
    GETUSERTYPELIST = 'get-usertype', // 用户类型
    GETREALTIMELIST = 'get-realtimelog', // 实时动态
    GETLOCKNUMBYYEAR = 'get-locknum-byyear', // 年锁数量
    GETLOCKNUMBYMONTH = 'get-locknum-bymonth', // 月锁数量
    GETCUSTOMERTYPE = 'get-customertype', // 累计客户类型
    GETINDUSTRYDIVISION = 'get-industry-division', // 客户划分
    GETACCUMULATE = 'get-accumulate', // 数据总量
    GETOFFICENUM = 'get-officenum',
}
