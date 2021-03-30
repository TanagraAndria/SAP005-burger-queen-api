const database= require("../db/models")

const getProducts = (req, res) => {
  const result= database.Product.findAll()
    res.send(result)
    return res.status(200).json(Product);
  }

const getProductID = (req, res) => {
   const {id}=  database.Product.findAll({
      where: {
        id: Number (id)
      }
    })
    return res.status(200).json(Product);
  }  

const PostProducts = (req, res) => {
  const { name, description, price } = req.body;
  database.Product.create({
    name, description, price
    
  })
    .then((result) => {
      res.status(201).json(result);
    })
    .catch(() =>
      res.json({
        message: "error ",
      }));
  }

const PutroductID = (req, res) => {
  const {name, description, price}= req.body.id  
    const result= database.Product.update({name, description, price})
    res.send(result)
    return res.status(200).json(Product)
  }   
  
const DelProductID = (req, res) => {
  const destroyProduct =  database.Product.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(destroyProduct)
  }  
  
  module.exports = { getProducts, getProductID, PostProducts, PutroductID, DelProductID}