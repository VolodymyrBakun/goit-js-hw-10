import { fetchCountries } from './fetchCountries';
import getInputValue from './getInputValue';

export default function onSearch() {
  const toFind = getInputValue();
  if (toFind === '') return alert('Потрібно щось ввести!');
  fetchCountries(toFind);
};
