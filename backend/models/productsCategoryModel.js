const mongoose = require("mongoose");

const productsCategorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
      unique: [true, "Category Name already exist"],
    },
    categoryDescription: { type: String, default: "" },
    file: {
      originalName: String,
      fileName: String,
      imageUrl: String,
      fileType: String,
      fileSize: String,
    },
    user: { type: mongoose.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);


const productsCategory = mongoose.model(
  "productsCategory",
  productsCategorySchema
);

module.exports = productsCategory;
