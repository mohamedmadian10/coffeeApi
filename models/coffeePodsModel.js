const mongoose = require("mongoose");
//1- create Schema
const coffeePodsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    product_type:{
        type:String,
        required:true

    },
    pack_size:{
        type:String,
        required:true
    },
    coffee_flavor:{
        type:String,
        required:true
    }
    
})


//maping
module.exports = mongoose.model("coffee_Pods",coffeePodsSchema);