const express = require('express');
const { createBlogController } = require('../controllers/blogControllers');
const router = express.Router();


// router.get('/all-blog', getAllBlogsControll);

router.post('/create-blog', createBlogController);

// router.put('/update-blog/:id', updateBlogController);

// router.delete('/delete-blog/:id', deleteBlogController);

// router.get('/get-blog/:id', getBlogByIdController);
module.exports = router
