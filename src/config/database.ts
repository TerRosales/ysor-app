// import mongoose from "mongoose";

// let connected = false;

// const connectDB = async (): Promise<void> => {
//     mongoose.set("strictQuery", true);

//     if (connected) {
//         console.log("Connected to Server");
//         return; // Ensure the function exits here
//     }

//     const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
//     if (!uri) {
//         throw new Error("The MongoDB connection URI is missing.");
//     }

//     try {
//         await mongoose.connect(uri);
//         connected = true;
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// };

// export default connectDB;

import mongoose from "mongoose";

let connectingPromise: Promise<typeof mongoose> | null = null; // Tracks the ongoing connection attempt

const connectDB = async (): Promise<void> => {
    mongoose.set("strictQuery", true); // Ensures only schema fields are saved to the database

    // Avoid connecting again if already connected
    if (mongoose.connection.readyState === 1) {
        console.log("Database is already connected.");
        return;
    }

    // Check if a connection attempt is already in progress
    if (connectingPromise) {
        console.log("Waiting for ongoing database connection...");
        await connectingPromise;
        return;
    }

    const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
    if (!uri) {
        throw new Error("The MongoDB connection URI is missing.");
    }

    // Start a new connection attempt and store the promise
    connectingPromise = mongoose.connect(uri);

    try {
        await connectingPromise;
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    } finally {
        // Clear the connectingPromise after the attempt (success or failure)
        connectingPromise = null;
    }
};

export default connectDB;
