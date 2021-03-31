const database= require("../db/models")

const getOrders = (req, res) => {
  const result= database.Order.findAll()
  res.send(result)
  return res.status(200).json(Order);
  }

const getOrderID = (req, res) => {
  const {id}=  database.Order.findAll({
    where: {
      id: Number (id)
    }
  })
  return res.status(200).json(Order);
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
  const result= database.Order.update({client, table})
  res.send(result)
  return res.status(200).json(Order)
  }   
  
const DelOrderID = (req, res) => {
    res.send(" Deletando Pedido por ID")
  }  
  
  module.exports = { getOrders, getOrderID, PostOrder, PutOrder, DelOrderID}
