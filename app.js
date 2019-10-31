// Init Weather Object
const weather = new Weather('Boston', 'us');
//Init UI
const ui = new UI();
// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'us')


function getWeather() {
  weather.getWeather()
    //Success
    .then(results => {
      console.log(results)
      ui.paint(results);
    })
    //Fail
    .catch(err => {
      console.log(err)
    });
}