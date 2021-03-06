import axios from 'axios';
import { __API_END_POINT, __OWL_BOT_TOKEN } from '../utils/constKVP';
import handleError from './handleError';

const getHeaders: any = () => {
  return {
    timeout: 5000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': __OWL_BOT_TOKEN+''
    },
  };
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path: string) => {
  return new Promise((resolve, reject) => {
    axios.get(`${__API_END_POINT}${path}`, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};