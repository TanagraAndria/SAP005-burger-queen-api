const database= require("../db/models")

const UserController= (req, res) => {
    return res.status(200).json(user);
}
  
const all = async (req, res) => {
    const result= await database.User.findAll()
    console.log("todos")
    res.send(result)
    return res.status(200).json(user);
  }

  const UserID = async (req, res) => {
    const {id}= await database.User.findAll({
      where: {
        id: Number (id)
      }
    })
    return res.status(200).json(user)
  }

  const DeletID = async (req, res) => {
    const destroyUser = await database.User.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(destroyUser)
  }

  const  create = async (req, res) => {
    const {firstName, lastName, email, password,role}= req.body  
    const result= await database.User.create( {firstName, lastName, email, password,role})
    res.send(result)
    return res.status(200).json("Usuário criado")
  }

  const  update= async (req, res) => {
    const {firstName, lastName, email, password}= req.body.id  
    const result= await database.User.update({firstName, lastName, email, password})
    res.send(result)
    return res.status(200).json(user)
  }

 module.exports = {UserController, all, create, update, DeletID, UserID}
