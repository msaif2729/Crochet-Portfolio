const reviewRouter = require("express").Router()
const Review = require("../models/reviewSchema")


reviewRouter.post("/createreview", async (req, res) => {
    try {
        const { first, last, email, rating, reviewtext, image } = req.body;

        // Validate required fields
        if (!first || !last || !email || !rating || !reviewtext || !image) {
            return res.status(400).send({ error: "All fields are required." });
        }

        const review = await Review.create({
            name: `${first} ${last}`,
            email: email,
            rating: rating,
            reviewtext: reviewtext,
            image: image
        });
        res.status(201).json(review);

    } catch (error) {
        console.error(error); // Log the complete error
        res.status(500).send({ error: error.message || "Internal Error" });
    }
});


reviewRouter.get("/getallreview", async (req,res)=>{
    try {
        const getreview = await Review.find()
        res.json(getreview)

    } catch (error) {
        console.log({error})
        res.status(500).send({error:"Internal Error"})
    }
})


module.exports = reviewRouter