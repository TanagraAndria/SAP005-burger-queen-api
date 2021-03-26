const database= require("../db/models")

const getProducts = (req, res) => {
    res.send("Pegando Produtos")
  }

const getProductID = (req, res) => {
    res.send("Pegando Produtos por ID")
  }  

const PostProducts = (req, res) => {
    res.send("Postando Produtos")
  }

const PutroductID = (req, res) => {
    res.send("Atualizando Produtos por ID")
  }   
  
const DelProductID = (req, res) => {
    res.send(" Deletando Produtos por ID")
  }  
  
  module.exports = { getProducts, getProductID, PostProducts, PutroductID, DelProductID}