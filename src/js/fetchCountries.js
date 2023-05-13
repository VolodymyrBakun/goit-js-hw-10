function fetchCountries(name) {
    const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flag,languages`;



    fetch(url).then(data => {
      return console.log(data.json());
    });
    

};

export {fetchCountries}