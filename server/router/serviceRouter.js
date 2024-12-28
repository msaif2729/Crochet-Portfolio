const serviceRouter = require("express").Router()
const Service = require("../models/serviceSchema")


serviceRouter.post("/createService",async (req,res)=>{
    try {
            const {first,last,email,phno,message,image} = req.body;
            const service = await Service.create({ 
                name : first+" "+last,
                email : email,
                phno : phno,
                message : message,
                image
            })
            res.json(service)

    } catch (error) {
        console.log({error})
        res.status(500).send({error:"Internal Error"})
    }
})


serviceRouter.get("/getallservice", async (req,res)=>{
    try {
        const getservice = await Service.find()
        res.json(getservice)

    } catch (error) {
        console.log({error})
        res.status(500).send({error:"Internal Error"})
    }
})


module.exports = serviceRouter