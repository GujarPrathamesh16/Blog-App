const blogModel = require('../models/blogModel')

exports.createBlogController = async (req, res) =>{
    try {
        const {title, description, image, user} = req.body;
        console.log(title);
        if(!title || !description || !image || !user){
            return res.status(400).send({
                success : false,
                message : 'Please fill all fields'
            })
        }

        const blog = new blogModel({title, description, image, user});
        await blog.save();
        return res.status(201).send({
            success : true,
            message : 'New blog Created!',
            blog //passing the created user
        })

    } catch (error) {
        console.log(error);
    }
};
