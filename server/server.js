require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = process.env.PORT || 3001;


// app.use((req, res, next) => {
//     console.log("Middleware!");
//     next();
// })

app.use(express.json());
app.use(morgan("dev"));


// GET all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("Route handler!");
    res.status(200).json({
    status: "success",
    data: {
      restaurant: ["mcdonalds", "wendys"],
    },
  });
});

// GET one restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req);
    res.status(200).json({
        status: "success",
        data: {
            restaurant:"mcdonalds"
        }
    })
})

// POST one restaurant
app.get("/api/v1/restaurants", (req, res) => {
    console.log(req);
    res.status(201).json({
        status: "success",
        data: {
            restaurant:"mcdonalds"
        }
    })

})

// PUT one restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant:"mcdonalds"
        }
    })

})


// DELETE one restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status:"success"
    })
})


app.listen(port, () => {
  console.log(`Server is up and listening on port ${port}`);
});
