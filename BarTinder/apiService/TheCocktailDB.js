require('dotenv').config();
const config = process.env;
// TODO: sort out my api key

const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export default {
  getCocktails: () => {
    return fetchRequest('filter.php?c=cocktail');
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
};

const fetchRequest = (path, options) => {
  return fetch(`${URL}/${path}`, options)
    .then((res) => (res.status <= 400 ? res : Promise.reject(res)))
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching /${url}`);
    });
};
