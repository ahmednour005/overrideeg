import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { FormGroup, FormControl, NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-post-control',
  templateUrl: './post-control.component.html',
  styleUrls: ['./post-control.component.css']
})
export class PostControlComponent implements OnInit {

  posts;
  index;
  editmode: boolean = true;
  @ViewChild('f', { static: false }) postInputs: NgForm;
  constructor(private serv: ServiceService) { }
  ngOnInit(): void {
    this.serv.getValues().subscribe(res => {
      this.posts = res;
    })
  }


  createPost(post) {
    if (this.editmode) {
      this.posts.unshift(post.value);
      //  this.serv.createPost(name).subscribe(res=>{
      //    this.posts.unshift(post.value);
      //    })
      post.reset();
    }
    else {
      this.posts[this.index] = post.value;
      //  this.serv.updatePost(post.id,post).subscribe(res=>{
      //    this.posts[this.index] = post.value;
      //  });
      post.reset();
    }
  }

  updatePost(post) {
    this.index = this.posts.indexOf(post)
    this.postInputs.setValue({
      title: this.posts[this.index].title,
      body: this.posts[this.index].body
    })
    this.editmode = false;
  }

}
