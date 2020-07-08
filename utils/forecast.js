const request = require('request')
require("dotenv").config();

const forecast = (latitude, longitude, callback) => {
  const url = "http://api.weatherstack.com/current?access_key=" + process.env.WEATHERSTACK_KEY + "&query=" + latitude + "," + longitude + "&units=f"

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.daily.data[0].summary +
          " It is currently " +
          response.body.currently.temperature +
          " degress out. There is a " +
          response.body.currently.precipProbability +
          "% chance of rain."
      );
    }
  });
};

module.exports = forecast;


