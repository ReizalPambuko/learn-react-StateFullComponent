import React from "react";
import "./PostApi.css";

const PostApi = (props) => {
    return(
        <div className="hiro">
            <img src="https://placeimg.com/400/250/tech" />
            <div className="content">
                <h3 className="title" onClick={() => props.title(props.data.id)}>{props.data.title}</h3>
                <p>{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default PostApi;