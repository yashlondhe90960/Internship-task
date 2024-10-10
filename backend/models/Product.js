const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  // other product fields
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;