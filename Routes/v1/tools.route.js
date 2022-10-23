const express = require('express');

const router = express.Router();


router.get("/", (req, res) => {
    res.send("Tools Found");
})


router.get("/:id", (req, res) => {
    res.send("Tools Found by ID");
})


router.post("/products", (req, res) => {
    res.send("Tool Added");
})


// altarnative


router.route("/").get((req, res) => {
    res.send("Tools Found");
}).post((req, res) => {
    res.send("Tool Added");
})


module.exports = router;