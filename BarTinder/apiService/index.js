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
  login: (credentials) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    };
    return fetchRequest('login', options);
  },
  swipe: (userId, drinkId, like) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, drinkId, like }),
    };
    return fetchRequest('likes', options);
  },
};

const fetchRequest = (path, options) => {
  return fetch(`${URL}/${path}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${URL}/${path}`);
    });
};
