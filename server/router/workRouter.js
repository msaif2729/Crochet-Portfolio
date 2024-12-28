const workRouter = require("express").Router()

const Work = require("../models/workSchema")

workRouter.get("/getallwork", async (req,res)=>{
    try {
        const getwork = await Work.find()
        res.json(getwork);  

    } catch (error) {
        console.log({error})
        res.status(500).send({error:"Internal Error"})
    }
})



workRouter.post("/crochet/admin/saif/createWork", async (req,res)=>{
    try {
        const { name, image } = req.body;
        const works = await Work.create({ 
            name,
            image
        })
        res.json(works)

} catch (error) {
    console.log({error})
    res.status(500).send({error:"Internal Error"})
}
})

module.exports = workRouter