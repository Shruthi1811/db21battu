const mongoose = require("mongoose")
const teslaSchema = mongoose.Schema({
    Model: {
        type: String,
        required: [true, "Name of tesla can not be blank"]
    },
    Year: {
        type: Number,
        required: [true, "Year of tesla can not be blank"]
        
    },
    Price: {
        type: Number,
        required: [true, "Price of the tesla is required"],
        min:10,
        max:50000
    }
})
module.exports = mongoose.model("Tesla", teslaSchema)