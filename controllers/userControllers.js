const userModel = require('../models/userModel')

exports.getHomepage = async (req,res) =>{
    try {
        res.send({ title: 'Homepage' })
        console.log("Homepage working");
    } catch (error) {
        console.log(error);
    }
};


exports.registerController = async (req,res) =>{
    try {
        const {firstName, lastName, email, password} = req.body;

        if(!firstName || !lastName || !email || !password){
            return res.status(400).send({
                success : false,
                message : 'Please fill all fields'
            })
        }

        const existingUser = await userModel.findOne({email})
        if(existingUser){
            return res.status(401).send({
                success : false,
                message : 'User already exists'
            })
        }

        //all cond satisfied => saving user in db.
        const user = new userModel({firstName, lastName, email, password});
        await user.save();
        return res.status(201).send({
            success : true,
            message : 'New user Created!',
            user //passing the created user
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({error})
    }
};

exports.getAllUsers = async (req,res) =>{
    try {
        const allUsers = await userModel.find({});
        return res.status(200).send({
            success : true,
            message : 'All users fetched',
            allUsers //passing the created user
        })

    } catch (error) {
        console.log(error);
        return res.status(500).send({error});
    }
};


exports.loginController = async (req,res) =>{
    try {
        const {email, password} = req.body;
 
        const user = await userModel.findOne({email});
        if(!user && user.password != password){
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        return res.json({ message: 'Login successful', user });

    } catch (error) {
        console.log(error)
    }
}