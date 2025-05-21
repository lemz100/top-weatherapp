import './styles.css';
console.log("hey");

async function getCityData(city){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=RBVC96DS4VNLXRFJZKJQ3LFSE&contentType=json`);
        const cityData = await response.json();
        return {
            date: cityData.days[0].datetime,
            time: cityData.currentConditions.datetime,
            weather: cityData.currentConditions.conditions,
            location: cityData.resolvedAddress,
            temp: cityData.currentConditions.temp,
            feelslike: cityData.currentConditions.feelslike,
            precip: cityData.currentConditions.precipprob,
            wind: cityData.currentConditions.windspeed,
            sunrise: cityData.currentConditions.sunrise,
            sunset: cityData.currentConditions.sunset,
            humidity: cityData.currentConditions.humidity,
            visibility: cityData.currentConditions.visibility
        }
    }
    catch(error) {
        console.log(error);
    }
}

const form = document.querySelector('form');
const cityInput = form.querySelector('#city-name');
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const cityData = await getCityData(cityInput.value);
    console.log(cityData);
});