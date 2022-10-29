import axios from "axios";

export class PostServices{
    getPosts(){
        return axios.get("http://localhost:3000/api/v1/posts")
    }
    getPost(id){
        return axios.get("http://localhost:3000/api/v1/posts/"+id)
    }
    editPost(id,post){
        return axios.put("http://localhost:3000/api/v1/posts/"+id,{
            "id": post.id,
            "photoUrl": post.photoUrl,
            "title": post.title,
            "summary": post.summary,
            "content": post.content,
            "likes": post.likes,
            "views": post.views
        })
    }
}