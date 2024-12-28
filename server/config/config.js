require("dotenv").config()

const API_PORT = process.env.API_PORT
const MONGO_URI = process.env.MONGO_URI
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
    API_PORT,
    MONGO_URI,
    JWT_SECRET
}
