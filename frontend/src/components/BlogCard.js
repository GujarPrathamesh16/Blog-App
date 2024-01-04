import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'


export default function RecipeReviewCard({ blogId, isUser, title, description, image, name, time }) {

  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
      const blog = {
        blogId : blogId,
        title : title,
        description : description,
        image : image
      }
      navigate('/blog-details',{state: blog})
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/blog/delete-blog?id=${blogId}`)
      // console.log("Delete response = ", response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card sx={{
      width: "40%", margin: "auto", mt: 2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover:": {
        boxShadow: "10px 10px 20px #ccc",
      },
    }}>

      {isUser && (
        <Box display={"flex"}>
          <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
            <EditIcon color="info" />
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
      )}

      <CardHeader
        title={name}
        subheader={time}
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="your image"
      />
      <CardContent>
        <Typography variant="h6" color="text.secondary">
          Title : {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Description : {description}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}
