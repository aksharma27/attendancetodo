const mongoose = require('mongoose');

const listSchema = new mongoose.Schema ({
    title : {
        type : String,
        required: true
    },
    body : {
        type : String,
        required: true
    }, 
    UserModel : [{
        type: mongoose.Types.ObjectId,
        ref: "ListModel"
    }]
},
{timestamps: true}
);

module.exports = mongoose.model('ListModel', listSchema);