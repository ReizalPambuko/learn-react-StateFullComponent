import axios from "axios";

const GetGlobal = 'http://localhost:3004';
const CommentGlobal = 'https://jsonplaceholder.typicode.com';


const Get = (path,root) => {
    const promise = new Promise((resolve,reject) => {
        axios.get(`${root ? CommentGlobal : GetGlobal}/${path}`)
            .then(res => {
                resolve(res.data)
            }, (err) => {
                reject(err)
            })
        })
        return promise
    } 

    const GetNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
    const GetNewsComment = () => Get('comments', true);


    const API = {
        GetNewsBlog,
        GetNewsComment
    }

export default API;                                                  