// Init Weather Object
const weather = new Weather('Boston', 'us');

// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'us')


function getWeather() {
  weather.getWeather()
    //Success
    .then(results => {
      console.log(results)
    })
    //Fail
    .catch(err => {
      console.log(err)
    });
}