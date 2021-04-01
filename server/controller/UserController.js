const database= require("../db/models")

const UserController= (req, res) => {
    return res.status(200).json(users);
}
  
const all = async (req, res) => {
    const result= await database.Users.findAll()
    console.log("todos")
    res.send(result)
    return res.status(200).json(users);
  }

  const UserID = async (req, res) => {
    const {id}= await database.Users.findAll({
      where: {
        id: Number (id)
      }
    })
    return res.status(200).json(users)
  }

  const DeletID = async (req, res) => {
    const destroyUser = await database.Users.destroy({
      where: {
        id: req.params.id
      }
    })
    res.status(200).json(destroyUser)
  }

  const  create = async (req, res) => {
    const {firstName, lastName, email, password,role}= req.body  
    const result= await database.Users.create( {firstName, lastName, email, password,role})
    res.send(result)
    return res.status(200).json("Usuário criado")
  }

  const  update= async (req, res) => {
    const {firstName, lastName, email, password}= req.body.id  
    const result= await database.Users.update({firstName, lastName, email, password})
    res.send(result)
    return res.status(200).json(users)
  }

 module.exports = {UserController, all, create, update, DeletID, UserID}
