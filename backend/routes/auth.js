const router = require('express').Router();
const bcrypt = require('bcryptjs');

// create login / signup in auth
const User = require('../models/user');

// singup : 
router.post('/register', async (req, res) => {
    try {
        const {email, username, password} = req.body;

        // hash password : 
        const hashedPassword = bcrypt.hashSync(password);

        const user = new User({email, username, password : hashedPassword});
        await user.save().then(() => res.status(200).json({user: user}));
    } catch (err) {
        res.status(400).json({message : "User Already Registered"})
        console.log(err);
    }
});


// login : 
router.post('/signin', async (req, res) => {
    try {
        // const {email, username, password} = req.body;
        const user = await User.findOne({email : req.body.email});  //check email sent from frontend to the backend

        if (!user) res.status(404).json({message : "User not found, Please sing up first"});
        // check password : 
        
        
        const isCorrectPassword = bcrypt.compareSync(req.body.password, user.password); //check password of the respective user
        if (!isCorrectPassword) res.status(404).json({message : "Incorrect password"});

        const {password, ...others} = user._doc;        //leaving password, leave everything as it  is
        res.status(200).json({others});
    } catch (err) {
        res.status(400).json({message : "User Already Registered"})
        console.log(err);
    }
})


module.exports = router;