
const renderCountryNames = (countries) => {
    let returnedHTML = '';
    for (const c of countries) {
        returnedHTML += `
        <div>${c.name.official} </div>`
    }

    return returnHTML;
}


async function loadEvent() {
    const countryRes = await fetch("https://restcountries.com/v3.1/all");
    const countryArr = await countryRes.json();
    console.log(renderCountryNames(countryArr));
}

window.addEventListener('load', loadEvent);