import Notiflix from 'notiflix';
import { renderCounties, renderCounty } from './renderCountries';

function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages`;

  return fetch(url).then(data => {
    if (data.status === 404) {
      renderCounty('');
      renderCounties('');
      return Promise.reject(
        Notiflix.Notify.failure('Oops, there is no country with that name')
      );
    }
    return data.json();
  });
}

export { fetchCountries };
