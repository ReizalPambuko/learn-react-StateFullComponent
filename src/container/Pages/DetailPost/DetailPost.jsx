import React, { Component } from "react";
import axios from "axios";


class DetailPost extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:3004/posts/${id}`)
        .then(res => {
            let data = res.data;
            this.setState({
                post:{
                    title: data.title,
                    body: data.body
                }
            })
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.post.title}</h3>
                <p>{this.state.post.body}</p>
            </div>
        )
    }
}


export default DetailPost;