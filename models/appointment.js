import mongoose from "mongoose"

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    }
})


const Appointment = mongoose.models.Appointment || mongoose.model( "Appointment", AppointmentSchema)

export default Appointment