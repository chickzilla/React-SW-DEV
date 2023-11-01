import mongoose from "mongoose";

let isConnected = false;

export const dbConnect = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) return;

  const MONGO_URI = process.env.MONGO_URI;
  if (!MONGO_URI) throw new Error("Please define MONGO_URI");

  // try to connect
  try {
    // buffer = ที่พักข้อมูล
    await mongoose.connect(MONGO_URI, { bufferCommands: false });
    isConnected = true;
    console.log("Connected");
  } catch (err) {
    console.log(err);
  }
};
