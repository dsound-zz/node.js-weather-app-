
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('New York', (error, data)=> {
    console.log('Error', error) 
    console.log('Data', data)
});

forecast(-75.7088, 45.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

