const express = require('express');
// const { getAllProducts, SaveAProducts } = require('../../Controllers/products.controllers');
const ToolsController = require('../../Controllers/products.controllers');

const router = express.Router();


// router.get("/", (req, res) => {
//     res.send("Tools Found");
// })


router.get("/",)


router.get("/:id", (req, res) => {
    res.send("Tools Found by ID");
})


router.post("/products", (req, res) => {
    res.send("Tool Added");
})


// altarnative

/**
router.route("/").get((req, res) => {
    res.send("Tools Found");
}).post((req, res) => {
    res.send("Tool Added");
})
*/

router.route("/")

.get(ToolsController.getAllProducts)

.post(ToolsController.SaveAProducts)


module.exports = router;