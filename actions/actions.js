"use server"

import mongoose from "mongoose"
import { connectToDB } from "@/dbConfig"
import Medicine from "@/models/medicine"
import { revalidatePath } from "next/cache"
import Appointment from "@/models/appointment"
import Emergency from "@/models/emergency"

export const addDoc = async (formdata, model) => {
    const name = formdata.get("name")
    const time = formdata.get("time")
    const number = formdata.get("number")
    console.log(name,time)
    try {
        await connectToDB()
        if(model=="Medicine"){
            await Medicine.create({
                name,
                time
            })
        }
        else if(model=="Appointment"){

            await Appointment.create({
                name,
                time
            })
        }
        else if(model=="Emergency"){
            await Emergency.create({
                name,
                number
            })
        }
    } catch (error) {
        console.log("error while adding Medicine", error)
    }
}


export const getDocs = async (model)=>{
    try {
        await connectToDB()
        if(model=="Medicine"){
            const Medicines = await Medicine.find()
            return Medicines
        }
        else if(model=="Appointment"){
            const Appointments =await Appointment.find()
            return Appointments
        }
        else if(model=="Emergency"){
            const EmergencyContacts =await Emergency.find()
            return EmergencyContacts
        } 
    } catch (error) {
        console.log(error) 
    }
}

export const deleteDoc = async(id, model)=>{
    try {
        await connectToDB()
        if(model=="Medicine"){
            await Medicine.findByIdAndDelete(id)
            revalidatePath('/medicines')
        }
        else if(model=="Appointment"){
            await Appointment.findByIdAndDelete(id)
            revalidatePath('/appointments')
        }
        else if(model=="Emergency"){
            await Emergency.findByIdAndDelete(id)
            revalidatePath('/emergency')
        }
    } catch (error) {
        console.log(error) 
    }
}