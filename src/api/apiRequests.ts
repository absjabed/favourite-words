import axios from 'axios';
import handleError from './handleError';
export const API_END_POINT = 'https://owlbot.info/api/v4/dictionary/';

const getHeaders: any = () => {
  return {
    timeout: 5000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Token 0170e978d09059b49e37c623f46c316bfd5385f6'
    },
  };
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path: string) => {
  return new Promise((resolve, reject) => {
    axios.get(`${API_END_POINT}${path}`, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};