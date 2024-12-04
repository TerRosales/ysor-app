import mongoose from "mongoose";

let connected = false;

const connectDB = async ():Promise<void> => {
    mongoose.set("strictQuery", true); // ensures that only fields that are specified in our schema will be saved in our database.
    
    // if the database is already connected, don't conenct again.
    if(connected) {
        console.log("Connected to Server")
    }

    try {
        await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        connected = true;
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;