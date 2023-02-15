import React from 'react'
import { useState } from 'react'
import { Grid, FormControl, FormLabel, TextField, Button, Typography, Box } from '@mui/material'

const SetPost = () => {
  const INITIAL_POST = {
    title: "",
    subtitle: "",
    author: "",
    createdAt: ""
  }
  const [post, setPost] = useState(INITIAL_POST);
  const [posts, setPosts] = useState([]);

  const createNewPost = (e) =>{
    e.preventDefault();
    setPosts([...posts, {...post, createdAt: new Date().toLocaleString()}]);
    return setPost(INITIAL_POST);
  }

  return (
    <Grid container spacing={2} m='30px'>
      <Grid item>
        <FormControl>
          <Typography variant='h5' component='h1'>Add New Post</Typography>
          <FormLabel>Title: </FormLabel>
          <TextField onChange={(e)=>setPost({...post, title: e.target.value})} value={post.title} />

          <FormLabel>Subtitle: </FormLabel>
          <TextField onChange={(e)=>setPost({...post, subtitle: e.target.value})} value={post.subtitle} />

          <FormLabel>Author: </FormLabel>
          <TextField onChange={(e)=>setPost({...post, author: e.target.value})} value={post.author} />

          <Button onClick={createNewPost} sx={{ mt: 1 }} variant='outlined' disabled={!post.title | !post.subtitle | !post.author }>Add Post</Button>
        </FormControl>
      </Grid>

      <Grid item>


        {!!posts.length && (
          posts.map( (postData, index)=> {
            return (
              <Box p={1} mb={1} key={index} sx={{ width:"300px", border: "1px solid #333", borderRadius: "3px" }}>
                <Typography variant='h5' component='p' sx={{textAlign:'center'}}>{postData.title}</Typography>
                <Typography variant='h6' component='p' sx={{textAlign:'center'}}>{postData.subtitle}</Typography>
                <Typography variant='p' component='p'>By: {postData.author}</Typography>
                <Typography variant='p' component='p'>Created At: {postData.createdAt}</Typography>
              </Box>
            )
          } )
        ) }

      </Grid>
    </Grid>

  )
}

export default SetPost