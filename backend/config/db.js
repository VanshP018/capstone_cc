/**
 * Database Connection
 * MongoDB connection using Mongoose
 */

const mongoose = require('mongoose');
const config = require('./index');

const connectDB = async () => {
  try {
    // Check if MONGO_URI is set
    if (!config.MONGO_URI) {
      throw new Error('MONGO_URI environment variable is not set');
    }

    const conn = await mongoose.connect(config.MONGO_URI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
