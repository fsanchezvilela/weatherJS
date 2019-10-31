// Init Storage
const storage = new Storage();
//Get Stored location data
const weatherLocation = storage.getLocationData();
// Init Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
//Init UI
const ui = new UI();
// Get Weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

//Change location Event
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  // Change Location
  weather.changeLocation(city,country)

  // Set Location in LS
  storage.setLocationData(city,country);

  // Get and Display weather
  getWeather();
  // Close modal
  $('#locModal').modal('hide');
})




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