const axios = require('axios')
const api = require('../../api')


exports.homeRoutes = (req,res) => {
api.get('https://crud-online-nodejs-mongodb.herokuapp.com/api/users')
.then(function(response) {
    console.log(response.data)
    res.render('index', {users:response.data})
}).catch(err => {
    res.send(err)
})

    
}

exports.add_user = (req, res) => {
    res.render('add_user')
}
exports.update_user = (req, res) => {
    api.get('https://crud-online-nodejs-mongodb.herokuapp.com/api/users', {params: {id: req.query.id}})
    .then(function(userdata) {
        res.render('update_user', {user: userdata.data})
    }).catch(err => {
        res.send(err)
    })
  
}