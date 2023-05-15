import { renderCounties, renderCounty } from './renderCountries';
import Notiflix from 'notiflix';

export default function createCountriesList(arr) {
  if (arr.length === 1) {
    const markup = arr.map(country => {
      const languages = country.languages;

      return `<h2>${country.flag}  ${country.name.official}</h2><p>Capital: ${
        country.capital
      }</p><p>Population:  ${
        country.population
      }</p><p>Languages:  ${Object.values(languages)}</p>`;
    });

    renderCounties('');
    return renderCounty(markup);
  }
  if (arr.length <= 10) {
    const markup = arr
      .map(country => {
        // console.log(country.flag);
        return `<li>${country.flag}  ${country.name.official}</li>`;
      })
      .join('');
    renderCounty('');
    return renderCounties(markup);
  }
  renderCounty('');
  renderCounties('');
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}
