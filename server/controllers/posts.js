import PostModel from '../models/postMessage.js'

const PostController = {
    getPosts : async (req,res)=>{
        try {
            const posts = await PostModel.find()
            res.status(200).json(posts)
        } catch (error) {
            if (error) {
                res.status(404).json({message : error.message})
            }
        }
       
    },
    addPosts : async (req,res)=>{
       const post = req.body
       const newPost = new PostModel(post)
       try {
           await newPost.save()
           res.status(201).json(newPost)
       } catch (error) {
           if (error) {
            res.status(409).json({message : error.message})
           }
       }
    }
}

export default PostController