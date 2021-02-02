import React, { Component } from 'react'

import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/postActions'
import store from '../store'




// add button to map and inside that button add event listener with id being passed down 



class Posts extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //        posts:[] 
    //     }
    // }

    // componentWillMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({posts: data}))
    // }

    componentWillMount(){
        this.props.fetchPosts()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => {
           return(
            <div className="posts" key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={()=> this.props.deletePost(post.id)}>Delete</button>
                
            </div>
           )
        })
        return (
            <div >
               { this. props.hasLoaded ? 
                 <div>
                     <h1 style={{color:"#166D3B"}}>Using Redux {this.props.hasLoaded}</h1>
                     { postItems }
                 </div> :
                     
                     <p>Wait a minute, trying to fetch the data.</p>
                }
               
               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item,
    hasLoaded: state.posts.hasLoaded
})



export default connect(mapStateToProps, { fetchPosts })(Posts)