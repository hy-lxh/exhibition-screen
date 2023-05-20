import axios from 'axios';
import { api_prefix, API } from './enum';

export const getUserTypeList = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETUSERTYPELIST);

export const getRealtimeLog = () =>
    axios.get<HttpResponse<Log[]>>(api_prefix + API.GETREALTIMELIST);

export const getLockNumByYear = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETLOCKNUMBYYEAR);

export const getLockNumByMonth = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETLOCKNUMBYMONTH);

export const getCustomerType = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETCUSTOMERTYPE);

export const getIndustryDivision = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETINDUSTRYDIVISION);

export const getAccumulate = () =>
    axios.get<HttpResponse<SeriesData[]>>(api_prefix + API.GETACCUMULATE);

export const getOfficeNum = () =>
    axios.get<HttpResponse<OfficeNumData>>(api_prefix + API.GETOFFICENUM);
