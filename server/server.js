require("dotenv").config();
const express = require("express");

const app = express(); 

const port = process.env.PORT || 3001;

app.get("/getRestaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        restaurant: "mcdonalds"
    });
})




app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`);
})



