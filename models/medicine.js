import {Schema, model, models} from "mongoose"

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    }
})


const Medicine = models.Medicine || model( "Medicine", medicineSchema)

export default Medicine