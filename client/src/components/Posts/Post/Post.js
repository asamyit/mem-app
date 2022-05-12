import React from 'react'
import {useDispatch} from 'react-redux'
import swal from 'sweetalert';
import { updatPostID } from '../../../actions/post_id'
import { deletePost } from '../../../actions/posts'
import { Card , CardActions, CardContent , CardMedia , Button , Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import useStyles from './styles'


export default function Post({post}) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const handleUpdate = (id)=>{
      dispatch(updatPostID(id))
    }
    const handleDelete =(id)=>{
      // dispatch(deletePost(id))
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deletePost(id))
        } 
      });
    }
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile}/> 
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{moment(post.createAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{color:'white'}} size='small' onClick={()=>handleUpdate(post._id)}>
          <MoreHorizIcon fontSize='medium'/>
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'></Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
        <Typography className={classes.title} variant='h5' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={()=>{}}>
          <ThumbUpAltIcon fontSize='small' /> Like
          {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={()=>{handleDelete(post._id)}}>
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  )
}
