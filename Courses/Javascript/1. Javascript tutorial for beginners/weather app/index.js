
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameDisplay = document.getElementById('city-name');


const forecastCards = document.querySelectorAll('.forecast-day');


function triggerWeatherSearch() {
    const inputVal = cityInput.value.trim();
    if (!inputVal) return alert("Please type a location name first!");


    cityNameDisplay.textContent = inputVal;
    cityInput.value = ''; // Clean field
    
    console.log(`Executing lookup system logic for location: "${inputVal}"`);
}

searchBtn.addEventListener('click', () => {
    triggerWeatherSearch();
});

cityInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        triggerWeatherSearch();
    }
});


forecastCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const dayName = card.querySelector('.day-title').textContent;
        const currentTemp = card.querySelector('.day-temp').textContent;
        
        console.log(`Inspecting details for Card Position #${index + 1}`);
        alert(`Extended Info: ${dayName} will average a temperature of ${currentTemp}.`);
    });
});
