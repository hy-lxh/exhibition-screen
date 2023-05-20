import { API, api_prefix } from '@/api/enum';
import { defineMock } from 'vite-plugin-mock-dev-server';

import {
    accumuateList,
    customerTypeList,
    industryDivisionList,
    lockNumByMonthList,
    lockNumByYearList,
    officeData,
    realtimeLogList,
    userTypeList,
} from './data';

export default defineMock([
    {
        url: api_prefix + API.GETUSERTYPELIST,
        body: {
            success: true,
            data: userTypeList,
        },
    },
    {
        url: api_prefix + API.GETREALTIMELIST,
        body: {
            success: true,
            data: realtimeLogList,
        },
    },
    {
        url: api_prefix + API.GETCUSTOMERTYPE,
        body: {
            success: true,
            data: customerTypeList,
        },
    },

    {
        url: api_prefix + API.GETLOCKNUMBYMONTH,
        body: {
            success: true,
            data: lockNumByMonthList,
        },
    },

    {
        url: api_prefix + API.GETLOCKNUMBYYEAR,
        body: {
            success: true,
            data: lockNumByYearList,
        },
    },

    {
        url: api_prefix + API.GETINDUSTRYDIVISION,
        body: {
            success: true,
            data: industryDivisionList,
        },
    },

    {
        url: api_prefix + API.GETACCUMULATE,
        body: {
            success: true,
            data: accumuateList,
        },
    },
    {
        url: api_prefix + API.GETOFFICENUM,
        body: {
            success: true,
            data: officeData,
        },
    },
]);
