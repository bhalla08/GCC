// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000; // Use the port defined by the environment or 3000 by default

// app.use(express.json());

// // Define your challenge-specific endpoints
// app.post('/challenge1', (req, res) => {
//   //const inputData = req.body; // Handle the data specific to challenge 1
//   res.body(Challenge1);
//   // Perform your processing here
//   res.send('Challenge 1 completed!');
// });

// app.post('/challenge2', (req, res) => {
//   const inputData = req.body; // Handle the data specific to challenge 2
//   // Perform your processing here
//   res.send('Challenge 2 completed!');
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express")

const app = express()

const port = 4000;

const cors = require("cors")        //would avoid any cors error in the server


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())



app.get("/file-reorganization", cors(),async(req,res) => {
    res.send("This is file-reorganization")
})

app.get("/portfolio-operations", cors(),async(req,res) => {
    res.send("This is portfolio-operations")
})

app.get("/time-intervals", cors(),async(req,res) => {
    res.send("This is time-intervals")
})

app.get("/data-encryption", cors(),async(req,res) => {
    res.send("This is data-encryption")
})

app.get("/coin-change", cors(),async(req,res) => {
    res.send("This is coin change")
})

app.get("/risk-mitigation", cors(),async(req,res) => {
    res.send("This is risk-mitigation")
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})