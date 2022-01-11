const axios = require('axios')

const api = axios.create({
    baseUrl:"http://localhost:3000/api/users"
})

module.exports = api