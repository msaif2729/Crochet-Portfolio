const mongoose = require("mongoose")
const {Schema} = mongoose

const workSchema = new Schema(
    {
        name:{
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

module.exports = mongoose.model("Work",workSchema)