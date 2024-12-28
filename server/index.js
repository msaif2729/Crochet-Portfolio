const connectMongoDB = require("./db")
const app = require("./config/app")
const {API_PORT} = require("./config/config")


//Establishing Connection
connectMongoDB()

app.listen(API_PORT, () => {
    console.log(`Example app listening on port ${API_PORT}`)
})