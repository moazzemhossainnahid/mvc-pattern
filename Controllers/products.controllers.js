const getAllProducts = (req, res) => {
    res.send("Tools Found");
};



// For Exports a Function
module.exports = {
    getAllProducts,
}

// Another way to Export Function
module.exports.SaveAProducts = (req, res) => {
    res.send("Product Added");
};