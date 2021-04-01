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

  getUser: (userId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    };
    return fetchRequest('user', options);
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

  getLikesAndDislikes: (userId) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId }),
    };
    return fetchRequest('user/likesAndDislikes', options);
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

  createGroup: (name) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name }),
    };
    return fetchRequest('group', options);
  },

  addMember: (groupId, email) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, groupId }),
    };
    return fetchRequest('addMember', options);
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

  getMatches: (memberIds) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ memberIds }),
    };
    return fetchRequest('matches', options);
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
