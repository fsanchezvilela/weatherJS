class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.currentStatus = document.getElementById('w-current-status');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
    this.currentStatus = document.getElementById('w-current-status')
  }

  paint(weather) {
    this.location.textContent = weather.name + ', ' + weather.sys.country;
    this.desc.textContent = weather.weather[0].description;
    this.string.textContent = 'Current Temp: ' + String((Number(weather.main.temp) - 273,15).toFixed(1)) + ' °C';
    this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`)
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.currentStatus.textContent = `Current Status: ${weather.weather[0].main}`;
    this.pressure.textContent = `Relative Pressure (hPA): ${weather.main.pressure}`;
    this.wind.textContent = 'Relative Wind: ' + String(weather.wind.speed * 3,6) + ' K/H';
 
  }
}