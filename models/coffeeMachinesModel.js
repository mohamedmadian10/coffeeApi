const mongoose = require("mongoose");

//1- create Schema
const coffeeMachinesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    product_type:{
        type:String,
        required:true

    },
    model:{
        type:String
    },
    water_line_compatible:{
        type:Boolean,
        required:true
    }
    
})


//maping
module.exports = mongoose.model("coffee_machines",coffeeMachinesSchema);