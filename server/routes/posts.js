import express from 'express'
import postController from '../controllers/posts.js'

const posts = express.Router()

posts.get('/', postController.getPosts)
posts.post('/',postController.addPosts)




export default posts