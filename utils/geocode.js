const request = require('request')
require("dotenv").config();

const geocode = (address, callback) => {
   
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=" + process.env.MAPBOX_KEY + "&limit=1";

    request({ url: url, json: true }, (error, response) => {
        if (error) { 
            callback("Unable to connect to location services!", undefined)
        } else if (!response.body.features) {
            callback("Unable to find location. Try another search", undefined)
        } else {
            callback(undefined, {
            longitude: response.body.features[0].center[0],
            latitude: response.body.features[0].center[1],
            location: response.body.features[0].place_name[0]
            })
        }
    })
};

module.exports = geocode;
