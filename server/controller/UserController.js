const database= require("../db/models")

const UserController= (req, res) => {
  const result= await database.Users.findAll()
    res.send(result)
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
    const {id}= req.params.id
    const result= await database.Users.delet( {id})
    res.send(result)
    return res.status(200).json(users)
  }

  const  create = async (req, res) => {
    const {firstName, lastName, email}= req.body  
    const result= await database.Users.create( {firstName, lastName, email})
    console.log("criar")
    res.send(result)
    return res.status(200).json(users)
  }

  const  update= async (req, res) => {
    const {id}= req.body.id  
    const result= await database.Users.update({firstName, lastName, email})
    res.send(result)
    return res.status(200).json(users)
  }

 module.exports = {UserController, all, create, update, DeletID, UserID}
