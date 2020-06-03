import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  posts:any;
  comments:any;
  subscribe : Subscription;
  constructor(private serv:ServiceService) { }

  ngOnInit(): void {
   this.subscribe = this.serv.getValues().subscribe(res=>{
      this.posts =res;});
      this.subscribe = this.serv.getCommentsValues().subscribe(ress=>{
        this.comments = ress;
      })
  }

  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }


}
