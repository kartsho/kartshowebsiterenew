const mongoose = require("mongoose");

const connectionDB = async () => {
  const mongoUri =
    process.env.MONGODB_URI ||
    process.env.MONGODB_URL ||
    process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "Missing MongoDB connection string. Set MONGODB_URL or MONGO_URI in backend/.env"
    );
  }

  try {
    const connection = await mongoose.connect(
      mongoUri,
      {
        autoIndex: true,
        serverSelectionTimeoutMS: 10000,
      }
    );

    console.log(`
      mongoDB is successfully connected
      Database: ${connection.connection.name}
      Host: ${connection.connection.host}
      `);
  } catch (error) {
    console.error(`
      mongoDB connection failed
      Error: ${error.message}
      `);

    throw error;
  }
};

module.exports = connectionDB;
