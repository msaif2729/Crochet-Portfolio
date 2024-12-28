const mongoose = require("mongoose");
const { MONGO_URI } = require("./config/config");

const connectMongoDB = () => {
  mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((er) => {
    console.error(`MongoDB connection error: ${er.message}`);
  });
};

module.exports = connectMongoDB;