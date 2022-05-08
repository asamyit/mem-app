import express from 'express'

const posts = express.Router()

posts.get('/',(req,res)=>{
    res.send('First Reqest')
})




export default posts