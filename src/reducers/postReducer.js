import { FETCH_POSTS, NEW_POSTS, DELETE_POSTS } from '../actions/types'

const initialState = {
    items: [],
    item: {},
    hasLoaded: false,
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload,
                hasLoaded: true
            }

        case NEW_POSTS:
            return {
                ...state,
                item: action.payload
            }
        case DELETE_POSTS:
            return {
                ...state,
            }

        
        default:
            return state;
    }
}