import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connect() {
  try {
    mongoose.set("strictQuery", true);

    // Use MongoDB Atlas URI from .env file
    const db = await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database Connected");
    return db;
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process with an error code
  }
}
