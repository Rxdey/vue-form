import axios from 'axios';
import toast from '@/components';

axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

axios.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response;
    console.error(`接口:${error.config.url}异常 --- ${error.message}`);
    switch (status) {
      case 404:
        toast({ message: '网络异常', type: 'error' });
        break;
      case 503:
        toast({ message: '服务器异常', type: 'error' });
        break;
      case 500:
        toast({ message: '服务器异常', type: 'error' });
        break;
      default:
        break;
    }
    return Promise.resolve(false);
  }
);
