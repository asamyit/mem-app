export default (posts = [] , action)=>{
    switch (action.type) {
        case 'FETCH_ALL':
           return action.payload
        case 'CREATE':
            return [...posts,action.payload] 
        case 'UPDATE':
            console.log(action.payload)
            return posts.map((post)=>{
                if (post._id === action.payload._id) {
                    return action.payload
                }else{
                   return post
                }
            })
        case 'DELETE':
            return posts.filter((post)=>post._id !== action.payload)
        default:
            return posts 
    }
}