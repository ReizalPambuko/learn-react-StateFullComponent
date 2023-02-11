import axios from "axios";
import React,{Component, Fragment} from "react";
import PostApi from "../PostApi";
import "./PokesApi.css"

class PokesApi extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        updateData: false
    }

    handleCounterChange = (event) => {
        const formBlogPostNew = {...this.state.formBlogPost};
        formBlogPostNew[event.name] = event.target.value;
        let time = new Date().getTime();
        if(!this.state.updateData){
            formBlogPostNew["id"] = time;
        };
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }


    getPostApi(){
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(res => {
            this.setState({
                post: res.data,
                formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
            })
        })
    }


    componentDidMount(){
        this.getPostApi();
    }

    handleRemove = (data) =>  {
        axios.delete(`http://localhost:3004/posts/${data}`)
        .then((res) => {
            this.getPostApi(); 
        })
    }

    postApi = () => {
        axios.post("http://localhost:3004/posts", this.state.formBlogPost)
        .then(res => console.log(res))
        this.getPostApi();
    } 


    putToApi = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost)
        .then(res => {
            this.getPostApi();
            this.setState({
                updateData: false,
                formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
            }
                })
        })
    }

    handleSubmit = () => {
        if(this.state.updateData){
            this.putToApi();
        }
        else{
            this.postApi();
        }
    }


    updateToApi = (data) => {
        this.setState({
            formBlogPost: data,
            updateData: true
        })
    }

    updateTitle = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render(){
        return(
            <Fragment>
                <div className="form-add-post">
                    <label htmlFor="title">Title :</label>
                    <br />
                    <input type="text" value={this.state.formBlogPost.title} name="title" id="title" placeholder="add Title" onChange={this.handleCounterChange} />
                    <br />
                    <label htmlFor="body">Blog Content :</label>
                    <br />
                    <textarea name="body" value={this.state.formBlogPost.body} id="body" cols="30" rows="10" placeholder="add Block Content" onChange={this.handleCounterChange}></textarea>
                    <br />
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(datas => {
                        return <PostApi remove={this.handleRemove} key={datas.id} data={datas} update={this.updateToApi} title={this.updateTitle} />
                    })
                }
            </Fragment>
        )
    }
}

export default PokesApi;