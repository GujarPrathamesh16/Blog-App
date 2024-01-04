import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const getAllBlogs = async () =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/blog/all-blog`);
      // console.log("Response = ",response.data);
      setAllBlogs(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    getAllBlogs();
  }, []);
  return (
    <div>
      <div>
      <ul>
        { allBlogs && allBlogs.map(blog => (
          <li key={blog.id}>
            <BlogCard 
              blogId = {blog._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title = {blog.title}
              description = {blog.description}
              image = {blog.image}
              name = {`${blog.user.firstName} ${blog.user.lastName}`}
              time = {blog.createdAt}
            />
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Blogs
