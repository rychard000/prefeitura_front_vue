import axios from 'axios';

export const CLIENT_SECRET = '0S1nfxj1k8PIofKxO7yxES5SVTjHdsytrIOTwzDh';
export const APP_BASE_URL = 'http://localhost:8000';
export const APP_PAYLOAD_IN_HEADER = false;
export const CLIENT_ID = '3';


const excludeUrls = [
];
const excludeUrlsResponse = [
];
const interceptMethods = ['post', 'put', 'patch', 'delete',];

console.log('APP_BASE_URL', APP_BASE_URL,'APP_CLIENT_SECRET',CLIENT_SECRET);

const API = axios.create({
  baseURL: APP_BASE_URL,
  headers: {
    "Content-Type" : 'application/json',
    Accept: 'application/json, image/png ,image/jpeg , image/jpg',
  },
  withCredentials:true,
  timeout: 30000,
  timeoutErrorMessage: 'Tempo de conexão excedida, tente novamente mais tarde',
});
API.interceptors.request.use((request) => {
  if (APP_PAYLOAD_IN_HEADER) {
    if (excludeUrls.indexOf(request.url) < 0 && interceptMethods.indexOf(request.method) >= 0) {
      if (request.data) {
        request.headers['payload'] = JSON.stringify(request.headers);
      }
    }
  }
  const accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});
API.interceptors.response.use(
  (response) => {
    // if (response?.data?.success === false && excludeUrlsResponse.indexOf(response.config.url) === -1) {
    //   return Promise.reject(response.data);
    // }
    return Promise.resolve(response.data);
  },
  (error) => {
    //IF NOT AUTHENTICATED GO TO HOME PAGE
    if(error?.response?.data.message == 'Unauthenticated.'){
      // return window.location.href = '/'
      console.log(error)

    }
    else{
      console.log(error)
      return Promise.reject(
        error?.response?.data  ??
        new Error('Ops, parece que você está sem acesso à internet ou nosso sistema está fora do ar. Por favor tente novamente em alguns minutos. Caso o erro persista entre em contato pelos nossos canais de atendimento.')
      );
    }

  }
);
export default API;
