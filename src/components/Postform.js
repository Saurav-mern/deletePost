import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const post = {
            title : this.state.title,
            body : this.state.body
        }

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //   method: 'POST',
        //   headers: {
        //       'content-type' : 'application/json'
        //   },
        //   body: JSON.stringify(post)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        this.props.createPost(post)
    }
    





    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label htmlFor="title">Title: </label><br/>
                        <input type="text" name="title" id="title" value={this.state.title}  onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label htmlFor="body">Body: </label><br/>
                        <textarea name="body" id="body"  value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}


export default connect(null, { createPost })(Postform)