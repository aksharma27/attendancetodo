const router = require('express').Router();

const User = require('../models/user');
const List = require('../models/list'); 

router.post('/add-task', async(req, res) => {
    const {title, body, email} = req.body;
    const existingUser = await User.findOne({email});
    try {
        if (existingUser) {
            const list = new List({title, body, user: existingUser});
            await list.save().then(() => res.status(200).json({list}));
            existingUser.list.push(list);
            existingUser.save();
        }
    } catch (e) {
        console.log(e);
    }
})

module.exports = router;