const axios = require('axios')

const api = axios.create({
    baseUrl:"http://localhost:3000"
})

module.exports = api