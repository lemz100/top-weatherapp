import './styles.css';
import populateWeatherCard from './userint';
const loading = document.querySelector(".loading-screen");
const container = document.querySelector(".app");

async function getCityData(city){
    container.innerHTML = "";
    loading.classList.remove("hidden");
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=uk&key=RBVC96DS4VNLXRFJZKJQ3LFSE&contentType=json`);
        const cityData = await response.json();
        loading.classList.add("hidden");

        return {
            temphigh: cityData.days[0].tempmax,
            templow: cityData.days[0].tempmin,
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
    populateWeatherCard(cityData);
});