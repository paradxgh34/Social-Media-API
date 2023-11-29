const express = require ("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes") // new added addtional routes
require('dotenv').config()





// db connection
mongoose.connect(process.env.DB_URI)
    .then(() => {
    const app = express()
    app.use(express.json())
    app.use("/api", routes)


    app.listen(5000, () => {
        console.log("Server has started!")
    })
})







// db connection










// db connection