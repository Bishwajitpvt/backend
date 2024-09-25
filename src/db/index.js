import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// connecting to db => using async/await as db is in another continent :)
const connectDB = async () => {
  // always use try-catch when connecting with db
  try {
    // connecting to db
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    // logd the port number in which the connection is done
    console.log(`\n MongoDB connected ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error " + error);
    process.exit(1); // node inbuit package
  }
};

export default connectDB;
