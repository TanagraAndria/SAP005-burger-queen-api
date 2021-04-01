const database= require("../db/models")

const getOrders = (req, res) => {
  const result= database.Orders.findAll()
  res.send(result)
  return res.status(200).json(Orders);
  }

const getOrderID = (req, res) => {
  const {id}=  database.Orders.findAll({
    where: {
      id: Number (id)
    }
  })
  return res.status(200).json(Orders);
  }  

const PostOrder = (req, res) => {
  const { client, table } = req.body;
  database.Product.create({
    client, table
    
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "error ",
      }));
  }

const PutOrder = (req, res) => {
  const {client, table}= req.body.id  
  const result= database.Orders.update({client, table})
  res.send(result)
  return res.status(200).json(Orders)
  }   
  
const DelOrderID = (req, res) => {
    res.send(" Deletando Pedido por ID")
  }  
  
  module.exports = { getOrders, getOrderID, PostOrder, PutOrder, DelOrderID}
