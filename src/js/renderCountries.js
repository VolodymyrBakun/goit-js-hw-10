import refs from './refs';

export function renderCounties(markup) {
    refs.countryList.innerHTML = markup;
}

export function renderCounty(markup) {
    refs.countryInfo.innerHTML = markup;
}