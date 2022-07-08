import express, { application } from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

//middleware
notFoundMiddleware
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"

app.get("/", (req, res) => {
    throw new Error("error")
    res.send("welcome")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000


//middleware goes here

application.listen(port, () => {
    console.log(`Server is nott moss on port ${port}`)
})