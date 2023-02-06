import express, { Application,Request,Response } from "express"
import router from "./router/stationaryRouter"
require("./config/db")
const app:Application = express()
app.use(express.json());
const Port = 3456;

app.get("/", (req:Request, res:Response):Response =>{
    return  res.status(200).json({
        message:"Server is up and running"
    })
})
app.use("/api",router)
app.listen(Port, ()=>{
    console.log("Server is Listening")
})
