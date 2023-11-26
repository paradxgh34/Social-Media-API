const express = require ("express")
const mongoose = require("mongoose")
const routes = require("./routes/routes") // new added addtional routes
require('dotenv').config()
console.log(process.env)






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








// Connect to MongoDB database
// mongoose
	// .connect("mongodb+srv://paradx34:ghost0011@atlascluster.u7brfdy.mongodb.net/acmedb")
	// .then(() => {
		// const app = express()
        // app.use("/api", routes)

		// app.listen(3000, () => {
			// console.log("Server has started!")
		// })
	// })