const fileOrganization= require("./Code/file-organization.js")

const express = require("express")

const app = express()

const port = 4000;

const cors = require("cors")


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post("/file-reorganization", cors(),async(req,res) => {
    // res.send(fileOrganization.fileOrg(req.body.inputs)); // post your result in JSON format
    res.json({ "answer": fileOrganization.fileOrg(req.body.inputs) })
})

app.post("/portfolio-operations", cors(),async(req,res) => {
    res.send("This is portfolio-operations")
})

app.post("/time-intervals", cors(),async(req,res) => {
    res.send("This is time-intervals")
})

app.post("/data-encryption", cors(),async(req,res) => {
    res.send("This is data-encryption")
})

app.post("/coin-change", cors(),async(req,res) => {
    res.send("This is coin change")
})

app.post("/risk-mitigation", cors(),async(req,res) => {
    res.send("This is risk-mitigation")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})