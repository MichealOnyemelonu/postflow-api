import mongoose from "mongoose";



const connectDB = async () => {
    console.log("MONGODB_URI:", process.env.MONGODB_URI);
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        
        console.log(`\n MongoDB has connected successfully !!! ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log("MongoDB conection has failed woefully!!!", error);
        process.exit(1);

    }
}

export default connectDB;