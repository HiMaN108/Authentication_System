import mongoose from "mongoose";
<<<<<<< HEAD
import { MongoMemoryServer } from "mongodb-memory-server";

import dotenv from 'dotenv';

dotenv.config();

export default async function connect(){

    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strictQuery' , true)
    // const db = await mongoose.connect(getUri);
    const db = await mongoose.connect(process.env.ATLAS_URI);
    console.log('Database Connected');
    return db;  
=======
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
>>>>>>> fea394d (updating the some files)
}
