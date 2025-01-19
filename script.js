let weather = {
    "api-key": "1aec1dc7e55b0664f5c6b1e3f4105884",
    fetchWeather: function (city) {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city
            + '&appid='
            + this["api-key"]
            + "&units=metric"
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch((error) => console.error("Error fetching weather data:", error));
    },
    displayWeather: function (data) {
        const { name } = data;
        const { country } = data.sys;
        const { icon, description } = data.weather[0];
        const { temp, humidity, feels_like } = data.main;
        const { speed } = data.wind;

        const pinColor = this.getPinColor(description);
        document.getElementById("city").innerHTML = `${name}, ${country} <i class="fas fa-map-pin pin" style="color: ${pinColor};"></i>`;

        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        document.getElementById("description").innerHTML = description;

        document.getElementById("temp").innerHTML = `<i class="fas fa-thermometer-half"></i> ${temp}°C`;
        document.getElementById("feels").innerHTML = `<i class="fas fa-user"></i> Feels like: ${feels_like}°C`;
        document.getElementById("humidity").innerHTML = `<i class="fas fa-tint"></i> Humidity: ${humidity}%`;
        document.getElementById("wind").innerHTML = `<i class="fas fa-wind"></i> Wind Speed: ${speed} km/h`;

        document.querySelector(".weather").style.display = "block";
    },
    search: function () {
        this.fetchWeather(document.getElementById('search-bar').value);
    },
    getPinColor: function(description) {
        if (description.includes('clear')) {
            return '#ffcc00';
        } else if (description.includes('cloud')) {
            return '#a0a0a0';
        } else if (description.includes('rain')) {
            return '#1e90ff';
        } else if (description.includes('snow')) {
            return '#00ffff';
        } else if (description.includes('storm')) {
            return '#ff6347';
        } else {
            return '#ff6347';
        }
    }
};

let geocode = {
    "api-key": "115b9f226f534c7dbb90e5024f520cc7",
    reverseGeocode: function (latitude, longitude) {
        fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this["api-key"]}`
        )
        .then((response) => response.json())
        .then((data) => {
            const location = data.results[0].components.city || data.results[0].components.state;
            weather.fetchWeather(location);
        })
        .catch((error) => console.error("Error with reverse geocoding:", error));
    },
    geolocation: function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    this.reverseGeocode(latitude, longitude);
                },
                (error) => {
                    console.error("Geolocation error:", error);
                    weather.fetchWeather("Delhi");
                }
            );
        } else {
            console.error("Geolocation not supported");
            weather.fetchWeather("Delhi");
        }
    }
};

document.getElementById('search-btn').addEventListener('click', function () {
    weather.search();
});

document.getElementById('search-bar').addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        weather.search();
    }
});

geocode.geolocation();
