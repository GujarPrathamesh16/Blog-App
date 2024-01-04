const express = require('express');
const { createBlogController , getAllBlogsController, updateBlogController, getBlogByIdController, deleteBlogController} = require('../controllers/blogControllers');
const router = express.Router();


router.get('/all-blog', getAllBlogsController);

router.post('/create-blog', createBlogController);

router.put('/update-blog', updateBlogController);

router.delete('/delete-blog', deleteBlogController);

router.get('/get-blog', getBlogByIdController);

module.exports = router
