import express from 'express'
import postController from '../controllers/posts.js'

const posts = express.Router()

posts.get('/', postController.getPosts)
posts.post('/',postController.addPosts)
posts.put('/:id',postController.updatePost)
posts.delete('/:id',postController.deletPost)




export default posts