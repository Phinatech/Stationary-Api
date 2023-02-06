import myStation from "../model/stationaryModel";
import express,{Request,Response} from "express"

const gettingData = async (req:Request, res:Response):Promise<Response> => {
    try {
     const getAllstations = await myStation.find()
     return res.status(200).json({
        message:"All stationary data gotten sucessfully",
        data:getAllstations
     })
        
    } catch (error) {
       return res.status(404).json({
        message:"An error occured",
        error:error
       }) 
    }
}

const getOnedata =async (req:Request,res:Response):Promise<Response> => {
    try {
      const getOne = await myStation.findById(req.params.id)  
      return res.status(200).json({
        message: "One stationary data gotten sucessfully",
        data: getOne,
      });
        
    } catch (error) {
        return res.status(404).json({
        message: "An error occured",
        error: error,
        });   
    }
}

const postData =async (req:Request,res:Response):Promise<Response> => {
    try {
        const { name,genre,books,pens}= req.body
        // let underscore = genre.replaceAll(" ","").toLowerCase()
        let underscore = name.split(" ", [1])
        const creatingStationary = await myStation.create({
          name,
          genre,
          serialNo:`${underscore}${Math.floor(Math.random()*1000)}`,
          books,
          pens,
        },{new:true});
        return res.status(200).json({
          message: "One stationary data created sucessfully",
          data: creatingStationary
        }); 
    } catch (error) {
         return res.status(404).json({
           message: "An error occured",
           error: error.message
         });
    }
}

export{gettingData,getOnedata,postData}