import {Schema, model, models} from "mongoose"

const EmergencySchema = new Schema({
    name: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    }
})


const Emergency = models.Emergency || model( "Emergency", EmergencySchema)

export default Emergency