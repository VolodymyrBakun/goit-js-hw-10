import Notiflix from 'notiflix';
import { renderCounties, renderCounty } from './renderCountries';

export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages`;

  return fetch(url).then(data => {
    if (!data.ok) {
      renderCounty('');
      renderCounties('');
      throw new Error(data.status);
    }
    return data.json();
  });
}
