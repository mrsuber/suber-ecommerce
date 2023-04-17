const productsCategory = require("../models/productsCategoryModel");
const factory = require("./handlerFactory");


exports.setUserId = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

exports.createCategory = factory.createOne(productsCategory);

exports.getAllCategory = factory.getAll(productsCategory);

exports.getCategory = factory.getOne(productsCategory);

exports.deleteCategory = factory.deleteWithFile(productsCategory);

exports.updateCategory = factory.updateWithFile(productsCategory);