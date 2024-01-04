import React, {useState, useEffect} from 'react'
import axios from 'axios';
import BlogCard from '../components/BlogCard'

const UserBlogs = () => {

  const [myBlogs, setMyBlogs] = useState([]);
  const id = localStorage.getItem('userId');
  const getAllBlogs = async () =>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/blog/get-blog?id=${id}`);
      setMyBlogs(response.data);
      
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() =>{
    getAllBlogs();
  }, []);
  return (
    <div>
      <ul>
        { myBlogs && myBlogs.map(blog => (
          <li key={blog.id}>
            <BlogCard 
              blogId = {blog._id}
              isUser = {true}
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
  )
}

export default UserBlogs
