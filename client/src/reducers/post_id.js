export default (post_id = 0 , action)=>{
    switch (action.type) {
        case 'UPDATE_ID':
           return action.id
        default:
            return post_id 
    }
}