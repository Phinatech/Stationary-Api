import mongoose from "mongoose";
const URL = "mongodb://localhost/stationary"

mongoose.connect(URL) 
mongoose.connection.on("open",()=>{
    console.log("Database is connected")
})
.once("error", ()=>{
 console.log("An Error occured while connecting to database")
})
