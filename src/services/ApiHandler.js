import axios from 'axios';
import qs from 'qs';

export const baseURL = 'http://ecom.easycod.net/mobile/';
// export const baseURL = 'http://192.168.10.15:3000/';
const fetch = (endPoint, params, reqType) => {
  const occ = axios.create({});
  const url = `${baseURL}${endPoint}`;
  console.warn(url);

  switch (reqType) {
    case 'get':
      return new Promise((resolve, reject) => {
        occ
          .get(url)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });

    case 'post':
      return new Promise((resolve, reject) => {
        const credentials = qs.stringify(params);
        occ
          .post(url, credentials)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });

    default:
      break;
  }
};

export default fetch;
