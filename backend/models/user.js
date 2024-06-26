const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email :  {
        type : String,
        required : true
    },
    username : {
        type: String,
        // required : true
    },
    password : {
        type : String,
        required : true
    }, 
    list : [{
        type: mongoose.Types.ObjectId,
        ref: "ListModel"
    }]
});

module.exports = mongoose.model('UserModel', userSchema);