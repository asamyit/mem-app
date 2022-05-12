import mongoose from 'mongoose'
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
    },
    deletPost : async(req,res)=>{
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(409).json({message : 'No mem exist'})
        }
        try {
           await PostModel.findOneAndDelete({_id:id})
           res.status(201).json({message:'MemDeleted'})
        } catch (error) {
            if (error) {
                res.status(409).json({message : error.message})
            }
        }

    },
    updatePost : async(req,res)=>{
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(409).json({message : 'No mem exist'})
        }
        try {
           const updatepost = await PostModel.findByIdAndUpdate(id,req.body,{new:true})
           res.status(201).json(updatepost)
        } catch (error) {
            if (error) {
                res.status(409).json({message : error.message})
            }
        }

    }
}

export default PostController