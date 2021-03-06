import config from '../config';

const URL = `${config.API_URL}${config.API_KEY}`;

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
