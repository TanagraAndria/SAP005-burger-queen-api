const database= require("../db/models")

const getOrders = (req, res) => {
    res.send("Pedidos")
  }

const getOrderID = (req, res) => {
    res.send("Pedidos por ID")
  }  

const PostOrder = (req, res) => {
    res.send("Postando Pedidos")
  }

const PutOrder = (req, res) => {
    res.send("Atualizando Pedido por ID")
  }   
  
const DelOrderID = (req, res) => {
    res.send(" Deletando Pedido por ID")
  }  
  
  module.exports = { getOrders, getOrderID, PostOrder, PutOrder, DelOrderID}
