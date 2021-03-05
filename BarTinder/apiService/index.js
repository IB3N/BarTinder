const URL = 'http://192.168.1.3:4000';

const api = (path, options) => {
  return fetch(`${URL}/${path}`);
};
