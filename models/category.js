const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryId: {
    type: String,
    required: true,
  },
  categoryName: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Category", categorySchema);
