import axios from 'axios';

const baseURL = 'http://dev01.thrownomore.no:5001';

const appAPI = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  withCredentials: true,
});

appAPI.interceptors.response.use(
  (response) => {
    // if (response.status > 399) {
    //   return Promise.reject(response);
    // }
    return response;
  },
  (error) => {
    console.log(error);
    return null;
  },
);

export default appAPI;
