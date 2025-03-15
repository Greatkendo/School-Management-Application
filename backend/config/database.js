import mongoose from "mongoose";

async function connectionToDatabase() {
 try {
  await mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING)
  console.log("Database Connected Successfully");
  
 } catch (error) {
  console.log(error);
  
 }
}

export {connectionToDatabase}