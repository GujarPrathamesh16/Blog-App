import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate,  useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

const defaultTheme = createTheme();

const BlogDetails = () => {

  const location = useLocation();
  const blog = location.state;
  console.log("My-Object", blog);

  const [inputs, setInputs] = useState({
    title: blog.title,
    description: blog.description,
    image : blog.image,
    blogId : blog.blogId
  });
  
  const navigate = useNavigate();
  const handleChange = (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Submitted");
      inputs.blogId = blog.blogId;
      
      try {
          const response = await axios.put('http://localhost:8080/api/v1/blog/update-blog', inputs);
          if (response) {
              toast.success("Blog updated Successfull");
              navigate('/my-blogs');
          }
      } catch (error) {
          console.error('Error during updating blog', error.message);
      }
  };

  return (
      <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                  sx={{
                      marginTop: 8,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                  }}
              >
                  <Typography component="h1" variant="h5">
                      Update Blog
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                      <TextField
                          margin="normal"
                          required
                          fullWidth
                          id="title"
                          label="Blog Title"
                          name="title"
                          autoComplete="title"
                          autoFocus
                          value = {inputs.title}
                          onChange={handleChange}
                      />
                      <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="description"
                          label="Description"
                          id="description"
                          value = {inputs.description}
                          onChange={handleChange}
                      />
                      <TextField
                          margin="normal"
                          required
                          fullWidth
                          name="image"
                          label="Image URL"
                          id="image"
                          value = {inputs.image}
                          onChange={handleChange}
                      />
                      <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                      >
                          Update
                      </Button>
                  </Box>
              </Box>
          </Container>
      </ThemeProvider>
  );
}

export default BlogDetails
