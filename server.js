import express, { application } from "express"

const app = express()

//middleware
notFoundMiddleware
import notFoundMiddleware from "./middleware/not-found.js"

app.get("/", (req, res) => {
    res.send("welcome")
})

app.use(notFoundMiddleware)

const port = process.env.PORT || 5000


//middleware goes here

application.listen(port, () => {
    console.log(`Server is nott moss on port ${port}`)
})