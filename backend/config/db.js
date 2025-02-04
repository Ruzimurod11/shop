const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
   try {
      const conn = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
   } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1); // process code 1 code means exit with failure, 0 means success
   }
};

module.exports = connectDB;

// cHg5GBHNeeM0Pf67
// mongodb+srv://donievruzimurod:<db_password>@cluster0.ybhag.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// 8OgugURu6J5Ccpm9
// mongodb+srv://donievruzimurod:8OgugURu6J5Ccpm9@cluster0.kw9ph.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
