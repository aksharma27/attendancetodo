const express = require('express');
const dotenv = require('dotenv');
dotenv.config();


//APIS : 
const auth = require('./routes/auth');

//file imports: 
const conn = require("./conn");


//environment variables
const url = process.env.URI;
const PORT = process.env.PORT;



const app = express();
//USE JSON FORMATS : 
app.use(express.json());


//db connection

conn();




app.get('/', (req, res)=> {
    res.send("hello");
})

// APIS IN USE : 
app.use('/api/v1', auth);

app.listen(1000, ()=> {
    console.log(`listening on port ${PORT}, 1000`);
});