import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = ()=> axios.get(url)
export const fetchPostByID = (id)=> axios.get(`${url}/${id}`)
export const creatPost  = (newPost)=> axios.post(url,newPost)
export const updatePost  = (id,updatepost)=> axios.put(`${url}/${id}`,updatepost)
export const deletePost  = (id)=> axios.delete(`${url}/${id}`)