var e=refs={inputEl:document.querySelector("#search-box")};e.inputEl.addEventListener("input",(function(){const t=e.inputEl.value.trim();if(""===t)return alert("Потрібно щось ввести!");fetch(`https://restcountries.com/v3.1/name/${t}?fields=name,capital,population,flag,languages`).then((e=>console.log(e.json())))}));
//# sourceMappingURL=index.452a4951.js.map
