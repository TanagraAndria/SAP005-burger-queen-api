const database= require("../db/models")

const all = async (req, res) => {
    const result= await database.Users.findAll()
    console.log("todos")
    res.send(result)
  }

  const ID = async (req, res) => {
    const {id}= req.params.id
    const result= await database.Users.delet( {id})
    console.log("1")
    res.send(result)
  }

  const  create = async (req, res) => {
    const {firstName, lastName, email}= req.body  
    const result= await database.Users.create( {firstName, lastName, email})
    console.log("criar")
    res.send(result)
  }

  const  destroy= async (req, res) => {
    const {id}= req.params.id
    const result= await database.Users.destroy( {id})
    console.log("apagar")
    res.send(result)
  }

  const  putUser= async (req, res) => {
    const {id}= req.body  
    const result= await database.Users.putUser( {id})
    console.log("atualizar")
    res.send(result)
  }
  

  
  module.exports = {all, create, destroy, putUser, ID}