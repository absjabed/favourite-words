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

// HTTP PATCH Request - Returns Resolved or Rejected Promise
export const patch = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios.patch(`${API_END_POINT}${path}`, data, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};

// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_END_POINT}${path}`, data, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};

// HTTP DELETE Request - Returns Resolved or Rejected Promise
export const del = (path: string) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${API_END_POINT}${path}`, getHeaders())
      .then(response => { resolve(response) })
      .catch(error => { reject(handleError(error)) });
  });
};
