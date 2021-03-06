// require('dotenv').config();
// const config = process.env;
// TODO: sort out my api key

const URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export default {
  getCocktails: () => {
    return fetchRequest('filter.php?c=cocktail');
  },
  getOne: (idDrink) => {
    return fetchRequest(`lookup.php?i=${idDrink}`);
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
