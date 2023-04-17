const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
     
    },
    rating:{
      type:Number,
      require:true
    },
    comment: {
      type: String,
      required: true
     
    },
    user:{
      type: mongoose.Types.ObjectId, ref: "user", require:true
    }
  }
)

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      
    },
    image:{type: String},
    description: { type: String, default: "" },
    reviews:[reviewSchema],
    rating:{
      type:Number,
      require:true,
      default:0
    },
    numReviews:{
      type:Number,
      require:true,
      default:0
    },
    price:{
      type:Number,
      require:true,
      default:0
    },
    countInStock:{
      type:Number,
      require:true,
      default:0
    },
    file: {
      originalName: String,
      fileName: String,
      imageUrl: String,
      fileType: String,
      fileSize: String,
    },
    category: { type: mongoose.Types.ObjectId, ref: "productsCategory",require:true },
  },
  { timestamps: true }
);


const product = mongoose.model(
  "product",
  productSchema
);

module.exports = product;
