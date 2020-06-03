import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {


  posts;
  update:boolean=false;
    constructor(private serv:ServiceService) { }
    ngOnInit(): void {
     this.serv.getValues().subscribe(res=>{
     this.posts =res;})
    }
  
    delete(post){
    let index= this.posts.indexOf(post);
    this.posts.splice(index,1);
    // this.serv.deletePost(post.id).subscribe(res=>{
    //   this.posts.splice(index,1);
    // });
    }
  
    viewPost(post){
      Swal.fire({
        title: post.title,
        text: post.body
      })
    }

}
