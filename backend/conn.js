const mongoose = require('mongoose');
const url = process.env.URL;

const conn = async (req, res) => {
    try {
        await mongoose.connect(process.env.URI).then(() => {
            console.log("database connection established");
        });
    }
    catch (e) {
        // res.status(400).json({message : "database connection error", error: e});
        console.log(e)
    }
};

module.exports = conn;