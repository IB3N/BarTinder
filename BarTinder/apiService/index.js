const URL = 'http://192.168.1.3:4000'; // This is crazy expo speak, because we are requesting over wifi, not my machine

export default {
  register: (newUser) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    };
    return fetchRequest('register', options);
  },
  login: (creds) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(creds),
    };
    return fetchRequest('login', options);
  },
};

const fetchRequest = (path, options) => {
  return fetch(`${URL}/${path}`, options);
};
