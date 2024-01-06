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


exports.getBlogByIdController = async(req, res) =>{
    try {
        const id = req.query.id;
        // console.log("id = ", id);
        const blogs = await blogModel.find({user : id}).populate("user");
        // console.log("Blogs = ",blogs);
        res.send(blogs);
        
    } catch (error) {
        console.log(error);
    }
};


exports.getAllBlogsController = async(req, res) =>{
    try {
        const allBlogs = await blogModel.find({}).populate("user");
        res.send(allBlogs);
    } catch (error) {
        console.log(error);
    }
}

exports.updateBlogController = async(req, res) =>{
    try {

        const {title, description, image, blogId} = req.body;

        const updatedBlog = await blogModel.findOneAndUpdate(
            {_id  : blogId},
            {title, description, image},
            { new: true, runValidators: true }
          );

        if (!updatedBlog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
      
        res.status(200).json(updatedBlog);


    } catch (error) {
        console.log(error);
    }
}


exports.deleteBlogController = async(req, res) =>{
    try {
        const blogId = req.query.id;
        const filter = { _id: blogId };
        const result = await blogModel.deleteOne(filter);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}