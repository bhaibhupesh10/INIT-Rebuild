import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // Attempt connection to production MongoDB URI
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri, { dbName: "INIT_DB_REBUILD" });
    console.log("Successfully connected to production MongoDB");
  } catch (error) {
    console.error("Failed to connect to production MongoDB:", error);

    try {
      // Fallback to local MongoDB URI if production connection fails
      const localMongoUri = process.env.MONGO_LOCAL;
      await mongoose.connect(localMongoUri, { dbName: "INIT_DB_REBUILD" });
      console.log("Successfully connected to local MongoDB (fallback)");
    } catch (localError) {
      console.error("Failed to connect to local MongoDB (fallback):", localError);
      // Handle critical error with local connection failure (e.g., process.exit())
      process.exit(1); // Exit process with non-zero code to indicate a critical error
    }
  }
};