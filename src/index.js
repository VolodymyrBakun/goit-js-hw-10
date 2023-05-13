import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import refs from './js/refs';
import getInputValue from './js/getInputValue';
import onSearch from './js/onSearch';

const DEBOUNCE_DELAY = 300;

refs.inputEl.addEventListener("input", onSearch)





