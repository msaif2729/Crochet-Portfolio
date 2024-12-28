const mongoose = require("mongoose")

const {Schema} = mongoose

const serviceSchema =  new Schema(
    {
        name:{
            type:String,
            required : true
        },
        email:{
            type:String,
            required : true
        },
        phno : {
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        },
        image:{
            type: String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now
        }
    },
    {
        versionKey : false 
    },
    {
        collection : "crochet"
    }   
)

module.exports = mongoose.model("service",serviceSchema)