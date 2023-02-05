import axios from "axios";
import React,{Component, Fragment} from "react";
import PostApi from "../../container/PostApi/PostApi";

class PokesApi extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
    }

    handleCounterChange = ( ) => {
        const formBlogPostNew = {...this.state.formBlogPost};
        formBlogPostNew[event.target.name] = event.target.value;
        let time = new Date().getTime();
        formBlogPostNew["id"] = time;
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }


    getPostApi(){
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then(res => {
            this.setState({
                post: res.data
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
        .then(res => {
            this.getPostApi()
        }, (err) => {
            console.log(err)
        })
    } 

    handleSubmit = () => {
        this.postApi();
        this.getPostApi();
    }

    render(){
        return(
            <Fragment>
                <p className="sectionPost">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title :</label>
                    <br />
                    <input type="text" name="title" id="title" placeholder="add Title" onChange={this.handleCounterChange}/>
                    <br />
                    <label htmlFor="body">Blog Content :</label>
                    <br />
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add Block Content" onChange={this.handleCounterChange}></textarea>
                    <br />
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(datas => {
                        return <PostApi remove={this.handleRemove} key={datas.id} data={datas} />
                    })
                }
            </Fragment>
        )
    }
}

export default PokesApi;