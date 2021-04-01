const database= require("../db/models")

const getProducts = (req, res) => {
  const result= database.Products.findAll()
    res.send(result)
    return res.status(200).json(products);
  }

const getProductID = (req, res) => {
   const {id}=  database.Products.findAll({
      where: {
        id: Number (id)
      }
    })
    return res.status(200).json(products);
  }  

const PostProducts = (req, res) => {
  const { name, description, price } = req.body;
  database.Products.create({
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
    const result= database.Products.update({name, description, price})
    res.send(result)
    return res.status(200).json(products)
  }   
  
const DelProductID = (req, res) => {
  const destroyProduct =  database.Products.destroy({
    where: {
      id: req.params.id
    }
  })
  res.status(200).json(destroyProduct)
  }  
  
  module.exports = { getProducts, getProductID, PostProducts, PutroductID, DelProductID}