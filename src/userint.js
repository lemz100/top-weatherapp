const container = document.querySelector("#weather-data-container");

function populateWeatherCard(cityData) {
    container.innerHTML = "";
    const weatherHeaderDiv = document.createElement("div");
    weatherHeaderDiv.id = "weather-header";
    const weatherHeader = document.createElement("h2");
    weatherHeader.textContent = cityData.location;
    weatherHeaderDiv.appendChild(weatherHeader);

    const weatherMainDiv = document.createElement("div");
    weatherMainDiv.classList.add("weather-main");
    const weatherContentDiv = document.createElement("div");
    weatherContentDiv.id = "weather-content";
    const cardContainerDiv = document.createElement("div");
    cardContainerDiv.classList.add("card-container");

    const daycardDiv = document.createElement("div");
    daycardDiv.classList.add("weather-daycard");
    
if (checkTimeDiff(cityData.time, cityData.sunrise) === true && checkTimeDiff(cityData.time, cityData.sunset) === false) {
    daycardDiv.classList.add("sunny");
    daycardDiv.classList.remove("night");
} else {
    daycardDiv.classList.add("night");
    daycardDiv.classList.remove("sunny");
}

    const daycardTop = document.createElement("div");
    daycardTop.classList.add("daycard-top");
    const daycardBottom = document.createElement("div");
    daycardBottom.classList.add("daycard-bottom");

    const daycardTopLeft = document.createElement("div");
    daycardTopLeft.classList.add("daycard-top-left");
    const daycardTopRight = document.createElement("div");
    daycardTopRight.classList.add("daycard-top-right");

    const dayTimeH2 = document.createElement("h2");
    let currentTime = parseTime(cityData.time);
    dayTimeH2.textContent = currentTime;
    const weatherdescP = document.createElement("p");
    weatherdescP.textContent = cityData.weather;
    const sunriseP = document.createElement("p");
    const sunsetP = document.createElement("p");
    let currentSunrise = parseTime(cityData.sunrise);
    let currentSunset = parseTime(cityData.sunset);
    sunriseP.textContent = "Sunrise: " + currentSunrise;
    sunsetP.textContent = "Sunset: " + currentSunset;
    daycardTopLeft.append(dayTimeH2, weatherdescP, sunriseP, sunsetP);

    const tempH1 = document.createElement("h1");
    tempH1.classList.add("day-temp");
    let currentTemp = Math.round(cityData.temp);
    tempH1.textContent = currentTemp + "°C";
    const temprangeSpan = document.createElement("span");
    temprangeSpan.classList.add("temprange");
    const temphigh = document.createElement("p");
    const templow = document.createElement("p");
    temphigh.textContent = "H: " + Math.round(cityData.temphigh) + "°C";
    templow.textContent = "L: " + Math.round(cityData.templow) + "°C";
    temprangeSpan.append(temphigh, templow);
    daycardTopRight.append(tempH1, temprangeSpan);
    daycardTop.append(daycardTopLeft, daycardTopRight);

    const windspeedP = document.createElement("p");
    const humidityP = document.createElement("p");
    const feelslikeP = document.createElement("p");
    const precipP = document.createElement("p");

    const windspeed = document.createTextNode(cityData.wind + "mph");
    const humidity = document.createTextNode(cityData.humidity + "%");
    const feelslike = document.createTextNode(Math.round(cityData.feelslike) + "°C");
    const precipitation = document.createTextNode(cityData.precip);

    windspeedP.innerHTML = `<svg fill="#FFFFFF" version="1.1" id="Layer_1" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 74.78" style="enable-background:new 0 0 122.88 74.78" xml:space="preserve"><g><path d="M28.69,53.38c-1.61,0-2.91-1.3-2.91-2.91c0-1.61,1.3-2.91,2.91-2.91h51.37c0.21,0,0.42,0.02,0.62,0.07 c1.84,0.28,3.56,0.8,5.1,1.63c1.7,0.92,3.15,2.19,4.27,3.89c3.85,5.83,3.28,11.24,0.56,15.24c-1.77,2.61-4.47,4.55-7.45,5.57 c-3,1.03-6.32,1.13-9.32,0.03c-4.54-1.66-8.22-5.89-8.76-13.55c-0.11-1.6,1.1-2.98,2.7-3.09c1.6-0.11,2.98,1.1,3.09,2.7 c0.35,4.94,2.41,7.56,4.94,8.48c1.71,0.62,3.67,0.54,5.48-0.08c1.84-0.63,3.48-1.79,4.52-3.32c1.49-2.19,1.71-5.28-0.61-8.79 c-0.57-0.86-1.31-1.51-2.18-1.98c-0.91-0.49-1.97-0.81-3.13-0.99H28.69L28.69,53.38z M15.41,27.21c-1.61,0-2.91-1.3-2.91-2.91 c0-1.61,1.3-2.91,2.91-2.91h51.21c1.17-0.18,2.23-0.5,3.14-0.99c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79 c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7 c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57 c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H15.41 L15.41,27.21z M2.91,40.3C1.3,40.3,0,38.99,0,37.39c0-1.61,1.3-2.91,2.91-2.91h107.07c1.17-0.18,2.23-0.5,3.13-0.99 c0.87-0.47,1.61-1.12,2.18-1.98c2.32-3.51,2.09-6.6,0.61-8.79c-1.04-1.53-2.68-2.69-4.52-3.32c-1.81-0.62-3.78-0.7-5.48-0.08 c-2.52,0.92-4.59,3.54-4.94,8.48c-0.11,1.6-1.49,2.81-3.09,2.7c-1.6-0.11-2.81-1.49-2.7-3.09c0.54-7.66,4.22-11.89,8.76-13.55 c3-1.09,6.32-0.99,9.32,0.03c2.98,1.02,5.68,2.97,7.45,5.57c2.72,4,3.29,9.41-0.56,15.24c-1.12,1.7-2.57,2.97-4.27,3.89 c-1.54,0.83-3.26,1.35-5.1,1.63c-0.2,0.04-0.41,0.07-0.62,0.07H2.91L2.91,40.3z"/></g></svg>`;
    windspeedP.append(windspeed);
    humidityP.innerHTML =  `<svg fill="#FFFFFF" version="1.1" id="Layer_1" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 93.271 122.881" enable-background="new 0 0 93.271 122.881" xml:space="preserve"><g><path d="M44.818,2.285c3.407,14.549,7.657,23.19,12.372,30.119l-5.811,1.965c-3.438-5.249-6.626-11.488-9.431-20.215 c-5.019,15.66-11.399,23.5-18.099,31.719c-4.859,5.96-9.899,12.14-14.619,21.91c-1.02,2.101-1.85,4.279-2.42,6.55 c-0.56,2.22-0.88,4.521-0.88,6.93c0,4.919,0.88,9.459,2.629,13.629c3.553,8.437,11.232,15.955,19.68,19.449 c4.209,1.74,8.779,2.62,13.72,2.62c4.959,0,9.549-0.88,13.768-2.62c4.221-1.749,8.131-4.39,11.701-7.909 c1.234-1.22,2.361-2.482,3.379-3.784l6.301,1.377c-1.574,2.318-3.422,4.525-5.539,6.618c-4.121,4.05-8.65,7.108-13.6,9.159 c-4.961,2.05-10.301,3.08-16.01,3.08c-5.71,0-11.041-1.03-15.99-3.08c-4.93-2.04-9.45-5.1-13.569-9.159 c-4.11-4.062-7.21-8.55-9.281-13.46C1.039,92.252,0,86.941,0,81.262c0-2.91,0.379-5.699,1.06-8.39c0.67-2.64,1.64-5.18,2.84-7.66 c5.021-10.38,10.29-16.84,15.36-23.069c7.609-9.34,14.79-18.14,19.79-39.849c0.359-1.59,1.949-2.58,3.539-2.22 C43.739,0.344,44.569,1.224,44.818,2.285L44.818,2.285L44.818,2.285z M83.148,42.595c1.336,0.982,1.551,2.81,0.479,4.087 c-1.076,1.265-3.039,1.493-4.391,0.513c-5.156-3.772-8.73-1.447-12.879,1.26c-6.117,4.009-13.143,8.588-25.531,3.687 c-1.577-0.624-2.277-2.327-1.596-3.806c0.697-1.48,2.533-2.162,4.107-1.55c9.226,3.653,14.714,0.062,19.503-3.078 C69.059,39.677,74.398,36.185,83.148,42.595L83.148,42.595L83.148,42.595z M92.107,81.648c1.34,0.982,1.553,2.809,0.479,4.087 c-1.074,1.265-3.037,1.495-4.389,0.514c-5.158-3.786-8.73-1.448-12.879,1.26c-6.119,4.008-13.141,8.588-25.533,3.687 c-1.576-0.624-2.276-2.327-1.594-3.807c0.695-1.479,2.531-2.161,4.107-1.549c9.223,3.653,14.711,0.062,19.502-3.078 C78.016,78.716,83.357,75.224,92.107,81.648L92.107,81.648L92.107,81.648z M88.305,61.368c1.34,0.984,1.555,2.811,0.479,4.088 c-1.074,1.266-3.035,1.496-4.391,0.515c-5.141-3.775-8.729-1.448-12.877,1.26c-6.117,4.007-13.141,8.588-25.533,3.686 c-1.576-0.625-2.276-2.326-1.595-3.806c0.696-1.479,2.533-2.161,4.108-1.55c9.223,3.654,14.713,0.063,19.502-3.077 C74.217,58.437,79.553,54.944,88.305,61.368L88.305,61.368L88.305,61.368z"/></g></svg>`;
    humidityP.append(humidity);
    feelslikeP.innerHTML = `<svg fill="#FFFFFF" width="32px" height="32px" viewBox="0 0 32 32" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <style> .cls-1 { fill: none; } </style> </defs> <path d="M26,30H22a2.0059,2.0059,0,0,1-2-2V21a2.0059,2.0059,0,0,1-2-2V13a2.9465,2.9465,0,0,1,3-3h6a2.9465,2.9465,0,0,1,3,3v6a2.0059,2.0059,0,0,1-2,2v7A2.0059,2.0059,0,0,1,26,30ZM21,12a.9448.9448,0,0,0-1,1v6h2v9h4V19h2V13a.9448.9448,0,0,0-1-1Z" transform="translate(0 0)"></path> <path d="M24,9a4,4,0,1,1,4-4h0A4.0118,4.0118,0,0,1,24,9Zm0-6a2,2,0,1,0,2,2h0a2.0059,2.0059,0,0,0-2-2Z" transform="translate(0 0)"></path> <path d="M10,20.1839V12H8v8.1839a3,3,0,1,0,2,0Z" transform="translate(0 0)"></path> <path d="M9,30A6.9931,6.9931,0,0,1,4,18.1108V7A5,5,0,0,1,14,7V18.1108A6.9931,6.9931,0,0,1,9,30ZM9,4A3.0033,3.0033,0,0,0,6,7V18.9834l-.332.2983a5,5,0,1,0,6.664,0L12,18.9834V7A3.0033,3.0033,0,0,0,9,4Z" transform="translate(0 0)"></path> <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect> </g></svg>`;
    feelslikeP.append(feelslike);
    precipP.innerHTML = `<svg fill="#FFFFFF" version="1.1" id="Layer_1" width="32px" height="32px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 110.28" style="enable-background:new 0 0 122.88 110.28" xml:space="preserve"><g><path d="M23.84,71.8c2.01,0.25,3.43,2.09,3.18,4.1c-0.25,2.01-2.09,3.43-4.1,3.18c-2.67-0.34-5.09-0.97-7.29-1.88 c-2.27-0.94-4.28-2.15-6.05-3.63c-1.68-1.4-3.15-2.99-4.4-4.72C1.84,64.25,0.04,58.63,0,53.03c-0.04-5.66,1.72-11.29,5.52-15.85 c1.23-1.48,2.68-2.84,4.34-4.04c1.93-1.4,4.14-2.58,6.64-3.55c1.72-0.67,3.56-1.23,5.5-1.68c2.2-8.74,6.89-15.47,12.92-20.14 c5.64-4.37,12.43-6.92,19.42-7.59c6.96-0.67,14.12,0.51,20.55,3.6c7.02,3.37,13.14,8.98,17.11,16.87c1.6-0.25,3.2-0.38,4.79-0.36 c6.72,0.04,13.2,2.45,18.3,7.95c1.07,1.15,2.08,2.45,3.02,3.9c3.2,4.92,4.84,11.49,4.77,17.92c-0.07,6.31-1.77,12.59-5.25,17.22 c-2.27,3.01-5.18,5.47-8.67,7.42c-3.36,1.88-7.28,3.31-11.68,4.33c-1.98,0.45-3.95-0.78-4.4-2.76c-0.45-1.98,0.78-3.95,2.76-4.4 c3.71-0.86,6.97-2.04,9.72-3.58c2.63-1.47,4.78-3.26,6.39-5.41c2.5-3.33,3.73-8.04,3.78-12.87c0.06-5.07-1.18-10.16-3.59-13.86 c-0.69-1.06-1.45-2.03-2.25-2.89c-3.61-3.89-8.19-5.59-12.95-5.62c-3.46-0.02-7.02,0.81-10.41,2.31c-0.75,0.37-1.5,0.77-2.25,1.21 c-2.25,1.32-4.47,2.93-6.74,4.78l-4.84-5.54c1.67-1.55,3.48-2.96,5.4-4.21c1.53-1,3.13-1.88,4.77-2.65c0.66-0.33,1.33-0.64,2-0.93 c-3.19-5.65-7.78-9.7-12.98-12.2c-5.2-2.49-11.02-3.45-16.69-2.9c-5.63,0.54-11.1,2.59-15.62,6.1c-5.23,4.06-9.2,10.11-10.73,18.14 l-0.48,2.51l-2.5,0.44c-2.45,0.43-4.64,1.02-6.56,1.77c-1.86,0.72-3.52,1.61-4.97,2.66c-1.16,0.84-2.16,1.78-3.01,2.8 c-2.63,3.15-3.85,7.1-3.82,11.1c0.03,4.06,1.35,8.16,3.79,11.53c0.91,1.25,1.96,2.4,3.16,3.4c1.22,1.01,2.59,1.85,4.13,2.48 C20.03,71.08,21.84,71.55,23.84,71.8L23.84,71.8z M55.63,79.77c2.19,10.17,8.77,15.25,8.77,20.34c0,5.09-2.19,10.17-8.77,10.17 c-6.58,0-8.77-5.08-8.77-10.17C46.86,95.03,53.43,89.94,55.63,79.77L55.63,79.77z M75.09,52.91c2.19,11.04,8.77,16.56,8.77,22.08 c0,5.52-2.19,11.04-8.77,11.04c-6.58,0-8.77-5.52-8.77-11.04C66.32,69.47,72.9,63.95,75.09,52.91L75.09,52.91z M45.74,51.84 c1.58,7.31,6.31,10.97,6.31,14.63c0,3.66-1.58,7.31-6.31,7.31c-4.73,0-6.31-3.66-6.31-7.31C39.43,62.81,44.16,59.15,45.74,51.84 L45.74,51.84z"/></g></svg>`;
    precipP.append(precipitation);
    daycardBottom.append(windspeedP, humidityP, feelslikeP, precipP);
    
    daycardDiv.append(daycardTop, daycardBottom);
    cardContainerDiv.append(daycardDiv);
    weatherContentDiv.append(cardContainerDiv);
    weatherMainDiv.append(weatherContentDiv);
    container.append(weatherHeaderDiv, weatherMainDiv);
}

// currTime = current time
// setTime = time that is already set e.g. sunset, sunrise time.
function checkTimeDiff(currTime, setTime) {
    let later = false;
    let token1 = currTime.split(":").map(Number);
    let token2 = setTime.split(":").map(Number);
    token1.pop();
    token2.pop();
    for(let i=0; i<token1.length; i++){
        if(token1[i]>token2[i]) {
            later = true;
            break;
        } else if(token1[i]<token2[i]){
            later = false;
            break;
        }
        later = true;
    }
    
    return later;
}

function parseTime(time) {
    let token1 = time.split(":");
    token1.pop();
    const newToken = token1.join(":");
    return newToken;
}

export default populateWeatherCard;