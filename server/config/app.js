const express = require("express")
const cors = require("cors")
const reviewRouter = require("../router/reviewRouter")
const workRouter = require("../router/workRouter")
const serviceRouter = require("../router/serviceRouter");
const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors({
    origin: ['http://localhost:3000', 'https://crochet-portfolio.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: false, // if you need to send cookies or authentication headers
}));


app.use("/api/review",reviewRouter)
app.use("/api/work",workRouter)
app.use("/api/service",serviceRouter)


module.exports = app