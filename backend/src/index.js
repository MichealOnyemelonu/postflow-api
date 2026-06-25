import dotenv from "dotenv" // a depency that lets us extract environment variables. Lets us use enviroment vairbales in our srver
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;

        });

        app.listen(process.env.PORT || 8000, () => { // the ports are like the connector where applicaations are going to connect through
            console.log(`Server is running on port : ${process.env.PORT}`);

        }) 
        
    } catch (error) {
        console.log ("MongoDB connect has failed", error);

    }   
}

startServer()