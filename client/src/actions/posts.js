import * as api from '../api'

// Action Creators
export const getPosts = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts()
        dispatch({
            type : 'FETCH_ALL',
            payload : data
        })
    } catch (error) {
        console.log(error.message)
    }   
}

export const creatPost = (post)=> async(dispatch)=>{
    try {
        const {data} = await api.creatPost(post)
        dispatch({
            type : 'CREATE',
            payload : data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePost = (id,post)=> async(dispatch)=>{
    try {
        const {data} = await api.updatePost(id,post)
        dispatch({
            type : 'UPDATE',
            payload : data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const likePost = (id)=> async(dispatch)=>{
    try {
        let {data} = await api.fetchPostByID(id)
        const likeCount = data.likeCount + 1
        data = await api.updatePost(id,{likeCount:likeCount})
        dispatch({
            type : 'LIKE',
            payload : data.data
        })
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePost = (id)=> async(dispatch)=>{
    try {
        await api.deletePost(id)
        dispatch({
            type : 'DELETE',
            payload : id
        })
    } catch (error) {
        console.log(error.message)
    }
}