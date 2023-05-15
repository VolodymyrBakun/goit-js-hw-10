import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import {refs} from './js/refs';
import createCountriesList from './js/createCountriesList';
import debounce from '../node_modules/lodash.debounce';
import { renderCounties, renderCounty } from './js/renderCountries';
import Notiflix from '../node_modules/notiflix';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  const toFind = refs.inputEl.value.trim();
  if (toFind === '') {
    renderCounty('');
    renderCounties('');
    return Notiflix.Notify.warning('Потрібно щось ввести!');
  }
  fetchCountries(toFind).then(createCountriesList);
}
