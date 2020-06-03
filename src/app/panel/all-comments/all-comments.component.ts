import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {
  comments;
  strName:string;
  update:boolean=false;
    constructor(private serv:ServiceService) { }
    ngOnInit(): void {
     this.serv.getCommentsValues().subscribe(res=>{
     this.comments =res;})
    }
  
    delete(comment){
    let index= this.comments.indexOf(comment);
    this.comments.splice(index,1);
    // this.serv.deleteComment(comment.id).subscribe(res=>{
    //   this.comments.splice(index,1);
    // });
    }

    viewComment(comment){
      Swal.fire({
        title: comment.name,
        text: comment.body
      })
    }

}
