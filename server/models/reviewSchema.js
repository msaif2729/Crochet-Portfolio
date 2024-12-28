const mongoose = require("mongoose")

const {Schema} = mongoose

const reviewSchema =  new Schema(
    {
        name:{
            type:String,
            required : true
        },
        email:{
            type:String,
            required : true
        },
        rating : {
            type:Number,
            required:true
        },
        reviewtext:{
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

module.exports = mongoose.model("Review",reviewSchema)