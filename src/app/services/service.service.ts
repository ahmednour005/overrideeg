import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  urlPosts="https://jsonplaceholder.typicode.com/posts";
  urlComments="https://jsonplaceholder.typicode.com/comments";
  posts:any;
  
  constructor( private https :HttpClient) { }

  getValues(){
   return this.https.get(this.urlPosts);
  }

  createPost(newPost){
    return this.https.post(this.urlPosts,newPost);
   }

   updatePost(id,newPost){
    return this.https.put(this.urlPosts+'/'+id,newPost);
   }
   
   deletePost(id){
    return this.https.delete(this.urlPosts+'/'+id);
   }
   getCommentsValues(){
    return this.https.get(this.urlComments);
   }
 
   createComment(newComment){
     return this.https.post(this.urlComments,newComment);
    }
 
    updateComment(id,newComment){
     return this.https.put(this.urlComments+'/'+id,newComment);
    }
    
    deleteComment(id){
     return this.https.delete(this.urlComments+'/'+id);
    }
}
