import axios from 'axios';

export const setHeader = (key, value) => {
  axios.defaults.headers[key] = value;
};

export const setAuthHeaders = ({accessToken}) => {
    if (accessToken) setHeader('Authorization', `bearer ${accessToken}`);
};

export const resetAuthHeaders = () => {
    delete axios.defaults.headers.Authorization;
};

export const get = (...args) => axios.get(...args);

export const post = (url, data, options = null) =>
  axios.post(url, data, options);

export const put = (url, data, options = null) => axios.put(url, data, options);

export const patch = (url, data, options = null) =>
  axios.patch(url, data, options);

export const del = (url) => axios.delete(url);

