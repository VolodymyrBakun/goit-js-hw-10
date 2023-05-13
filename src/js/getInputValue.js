import refs from './refs';
export default function getInputValue() {
    const data = refs.inputEl.value;
    const trimedData = data.trim();
    return trimedData;
}
