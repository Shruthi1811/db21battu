const mongoose = require("mongoose")
const teslaSchema = mongoose.Schema({
    Model: {
        type: String,
        required: [true, "Name of tesla can not be blank"]
    },
    Year: {
        type: Number
        
    },
    Price: {
        type: Number,
        required: [true, "Price of the tesla is required"]
    }
})
module.exports = mongoose.model("Tesla", teslaSchema)