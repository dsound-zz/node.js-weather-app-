
const geocode = require('./utils/geocode')
// const forecast = require('./utils/forecast')

geocode('ldskjfasdlkfjds;alkfjd;lkj', (error, data)=> {
    console.log('Error', error) 
    console.log('Data', data)
});

