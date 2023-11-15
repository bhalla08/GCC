const fileOrganization = require("./Code/file-organization.js")
const portfolioOpetations = require("./Code/portfolio-operations.js");
const riskMitigation = require("./Code/risk-mitigation.js");
const timeIntervals = require("./Code/time-intervals.js");
const coinChange = require("./Code/coin-change.js")
const dataEncryption = require("./Code/data-encryption.js");

const express = require("express")

const app = express()

const port = 4000;

const cors = require("cors");

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.post("/file-reorganization", cors(),async(req,res) => {
    res.json({ "answer": fileOrganization.fileOrg(req.body.inputs) });
})

app.post("/portfolio-operations", cors(),async(req,res) => {
    res.json({ "answer": portfolioOpetations.portfolioOpetations(req.body.inputs) });
})

app.post("/time-intervals", cors(),async(req,res) => {
    res.json({ "answer": "Hiii there"});
})

app.post("/data-encryption", cors(),async(req,res) => {
    res.json({ "answer": dataEncryption.encryptString(req.body.inputs) });
})

app.post("/coin-change", cors(),async(req,res) => {
    res.json({ "answer": coinChange.coinChange(req.body.inputs) });
})

app.post("/risk-mitigation", cors(),async(req,res) => {
    res.json({ "answer": riskMitigation.riskMitigation(req.body.inputs) });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})