import axios from 'axios';
import { API_HOST } from '../constants/api';

export default {
    otherSiteGet: async <T>(path = '', headers = {}) => {
        headers = {
            ...DEFAULT_HEADERS,
            ...headers,
        };
        const response = await axios.get<T>(path, { headers });
        const { status, data } = response;
        return { status, data, headers: response.headers || [] };
    },
    get: async <T>(path = "", headers = {}, token?: string): Promise<RequestClientResponse<T>> => {
        headers = {
            ...DEFAULT_HEADERS,
            ...headers,
            'Authorization': `Bearer ${token}`,
        };
        const apiPath = API_HOST + '/api' + path;
        const response = await axios.get(apiPath, { headers });
        const { status, data } = response;
        return { status, data, headers: response.headers || [] };
    },
    post: async <T>(path = "", payload: Object | null, headers = {}, token?: string): Promise<RequestClientResponse<T>> => {
        headers = {
            ...DEFAULT_HEADERS,
            ...headers,
            token,
        }
        if (path.substr(-1) != '/') path += '/';
        const apiPath = `${API_HOST}/api${path}`;
        const response = await axios.post<RequestClientResponse<T>>(apiPath, payload, { headers });
        const { status } = response;
        const data = response.data.data;
        return { status, data, headers: response.headers || [] };
    },
}

export const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
}


//? Types
export interface RequestClientResponse<T> {
    status: number;
    data: ApiResponse<T>;
    headers: any;
}

export interface ApiResponse<T> {
    status: string;
    data: T;
    count?: number;
}

export interface ApiError {
    status: number;
    message?: string | string[];
}

export interface ResponseErrorDTO {
    error: ApiError;
}