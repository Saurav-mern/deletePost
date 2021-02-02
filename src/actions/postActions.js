import { FETCH_POSTS, NEW_POSTS, DELETE_POSTS } from './types'

// export function fetchPosts() {
//     return function (dispatch) {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => dispatch({
//                 type: FETCH_POSTS,
//                 payload: posts
//             }))
//     }
// }

export const fetchPosts = () => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            })
        )
}
export const createPost = (postData) => dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(postData)
        })
        .then(res => res.json())
        .then(post => dispatch({
                type: NEW_POSTS,
                payload: post
            }))
}

// export const deletePost = id => dispatch => (
//     dispatch({type: DELETE_POSTS,
//     id,})
// )

export const deletePost = id => {
    return{
        type: DELETE_POSTS,
        id: id
    }
}