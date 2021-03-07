import config from '../config';

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

  getLikes: (userId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    };
    return fetchRequest('user/likes', options);
  },

  getGroupIds: (userId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    };
    return fetchRequest('user/groups', options);
  },

  getGroup: (groupId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groupId }),
    };
    return fetchRequest('groups', options);
  },

  getMembers: (groupId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ groupId }),
    };
    return fetchRequest('members', options);
  },
};

const fetchRequest = (path, options) => {
  return fetch(`${config.SERVER_URL}/${path}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${URL}/${path}`);
    });
};
