import express, { application } from "express"
const app = express()

app.get("/", (req, res) => {
    res.send("welcome")
})

const port = process.env.PORT || 5000


//middleware goes here

application.listen(port, () => {
    console.log(`Server is moss on port ${port}`)
})