const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=1256abb683ee2c67c9183bacff52a85f&query=37.8626,-122.4233'


request({ url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})