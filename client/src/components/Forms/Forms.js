import React,{useState,useEffect} from 'react'
import FileBase from 'react-file-base64'
import { TextField, Button , Typography , Paper } from '@material-ui/core'
import {useDispatch,useSelector} from 'react-redux'
import {creatPost,updatePost} from '../../actions/posts'
import { updatPostID } from '../../actions/post_id'
import useStyles from './styles'


export default function Forms() {
  const [postData,setPostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''})
  const id = useSelector((state)=> state.post_id)
  const posts = useSelector((state)=> state.posts)
  const post = posts.filter((post)=>{
    return post._id === id
  })
  
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (id===0) {
      dispatch(creatPost(postData))
    }else{
      dispatch(updatePost(id,postData))
    }
    dispatch(updatPostID(0))
    setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''})
  }
  useEffect(()=>{
    if(id) setPostData(post[0])
  },[id])
  return (
    <Paper className={classes.paper}>
      <form autoComplete='off' noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
        <Typography variant='h6'>{id===0?'Create a Mem':'Edit a Mem'}</Typography>
        <TextField 
          name='creator'
          variant='outlined'
          label = 'Creator'
          fullWidth
          value={postData.creator}
          onChange={(e)=> setPostData({...postData,creator:e.target.value})}
        />

          <TextField 
          name='title'
          variant='outlined'
          label = 'Title'
          fullWidth
          value={postData.title}
          onChange={(e)=> setPostData({...postData,title:e.target.value})}
        />

        <TextField 
          name='message'
          variant='outlined'
          label = 'Message'
          fullWidth
          value={postData.message}
          onChange={(e)=> setPostData({...postData,message:e.target.value})}
        />

        <TextField 
          name='tags'
          variant='outlined'
          label = 'Tags'
          fullWidth
          value={postData.tags}
          onChange={(e)=> setPostData({...postData,tags:e.target.value.split(',')})}
        />
        <div className={classes.fileInput}>
          <FileBase 
            type = 'file'
            multiple = {false}
            onDone = {({base64})=>{setPostData({...postData,selectedFile:base64})}}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color='primary' size='large' type='submit' fullWidth>Submit</Button>

      </form>

    </Paper>
  )
}
