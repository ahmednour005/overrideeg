import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-control',
  templateUrl: './comment-control.component.html',
  styleUrls: ['./comment-control.component.css']
})
export class CommentControlComponent implements OnInit {

  comments;
  index;
  editmode: boolean = true;
  @ViewChild('commentForm', { static: false }) commentInputs: NgForm;
  constructor(private serv: ServiceService) { }
  ngOnInit(): void {
    this.serv.getCommentsValues().subscribe(res => {
      this.comments = res;
    })
  }


  createComment(comment) {
    if (this.editmode) {
      this.comments.unshift(comment.value);
      //  this.serv.createPost(name).subscribe(res=>{
      //    this.comments.unshift(post.value);
      //    })
      comment.reset();
    }
    else {
      this.comments[this.index] = comment.value;
      //  this.serv.updatePost(post.id,post).subscribe(res=>{
      //    this.comments[this.index] = post.value;
      //  });
      comment.reset();
    }
  }

  updateComment(comment) {
    console.log(comment)
    this.index = this.comments.indexOf(comment)
    this.commentInputs.setValue({
      name: this.comments[this.index].name,
      body: this.comments[this.index].body
    })
    this.editmode = false;
  }


}
