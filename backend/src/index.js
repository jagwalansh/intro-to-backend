import dotenv from "dotenv";
import connectDb from "./config/database.js";
dotenv.config({
    path : "./config/.env"

});

const startServer = (app) =>{
    try{
        const connectDb;
        
        app.on("error", (error) => {
            console.log("Error in starting server:", error);
            throw error;
        });


        app.listen(process.env.PORT || 8000 , ()=>{
            console.log(`Server is running on port ${process.env.PORT || 8000}`);
        })
    }catch(error){
        console.log("mongoose db connection failed:", error);

    }
}
startServer();