const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


//file imports: 
const conn = require("./conn");


//environment variables
const url = process.env.URI;
const PORT = process.env.PORT;



const app = express();


//db connection

conn();

app.get('/', (req, res)=> {
    res.send("hello");
})

app.listen(1000, ()=> {
    console.log(`listening on port ${PORT}, 1000`);
});