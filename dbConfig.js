
import mongoose from "mongoose";

let isConnected = false


export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log("DB already connected") 
        return
    }

    try {

        await mongoose.connect("mongodb://localhost/live-better")

        isConnected = true

        
    } catch (error) {
        console.log("error while connecting to DB", error)
        
    }

}

