console.log('javascript connected!');

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 5000,
    pause: false
})

//when the pause button is clicked, puase the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }

})

async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = "malibu";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    displayWeather(data);


}

function displayWeather(data) {
    const newImageElement = document.createElement('img');
    newImageElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("weather-icon").appendChild(newImageElement);
    document.getElementById("weather-temp").textContent = `${data.main.temp}\u00B0F`;
    document.getElementById("weather-description").textContent = `${data.weather[0].description}`;

}


fetchWeather();



