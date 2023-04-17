const Products = require("../models/productModel");
const factory = require("./handlerFactory");


exports.setUserId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

exports.createProduct = factory.createOne(Products);

exports.getAllProducts = factory.getAll(Products);

exports.getProduct = factory.getOne(Products);

exports.deleteProduct = factory.deleteWithFile(Products);

exports.updateProduct = factory.updateWithFile(Products);