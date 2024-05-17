import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoUser = process.env.MONGODB_USERNAME;

const mongoUrl = `mongodb://${mongoUser}:${mongoPassword}@localhost:27017/cep-api?authSource=admin`;

const connectDB = async () => {
  try {
    await mongoose
      .connect(mongoUrl)
      .then(() => console.log("Connected to MongoDB"));
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
