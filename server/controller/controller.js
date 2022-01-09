var Userdb = require('../model/model')

//criando e salvando novo usuario
exports.create = (req, res) => {
if(!req.body) {
    res.status(400).send({message: "Campo nao pode estar vazio"})
    return
}
const user = new Userdb({
    name:req.body.name,
    email:req.body.email,
    gender:req.body.gender,
    status:req.body.status
})
user.save(user).then(data => {
    res.send(data)
}).catch(erro => {
res.status(500).send({
    message: erro.message})
})
}

//recuperar e devolver usuarios

exports.find = (req, res) => {

    if(req.query.id) {
const id = req.query.id

Userdb.findById(id)
.then(data => {
    if(!data) {
        res.status(404).send({message: `Nao foi encontrado usuario com id ${id}`})
    } else {
        res.send(data)
    }
}).catch(erro => {
    res.status(500).send({message:`Erro ao buscar por id ${id}`})
})
    } else {
Userdb.find().then(user => {
    res.send(user)
}).catch(erro => {
    res.status(500).send({message:erro.message})
})
}
}

//atualizar um usuario pelo id
exports.update = (req, res) => {
if(!req.body) {
return res.status(400)
.send({message:"Campo nao pode estar vazio"})
}
const id = req.params.id
Userdb.findByIdAndUpdate(id, req.body,{useFindandModify:false})
.then(data => {
    if (!data) {
        res.status(404).send({message:'Erro ao atualizar' })
    } else {
        res.send(data)
    }
}).catch(erro => {
    res.status(500).send({message:`Id ${id} nao foi encontrado`})
})
}

//apagando usuarios pelo id
exports.delete = (req, res) => {
const id = req.params.id

Userdb.findByIdAndDelete(id)
.then(data => {
    if(!data) {
        res.status(404).send({message: `Id ${id} nao foi encontrado`})
    } else {
        res.send({
            message:"Usuario deletado com sucesso"
        })
    }
}).catch(erro => {
    res.status(500).send({
        message: "Nao pode deletar usuario com id="+id
    })
})
}