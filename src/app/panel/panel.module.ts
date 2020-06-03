import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostControlComponent } from './post-control/post-control.component';
import { PanelComponent } from './panel.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AllCommentsComponent } from './all-comments/all-comments.component';
import { CommentControlComponent } from './comment-control/comment-control.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'', component:PanelComponent,children:[
    {path:'posts/all',component:AllPostsComponent},
    {path:'posts/control',component:PostControlComponent},
    {path:'comments/all',component:AllCommentsComponent},
    {path:'comments/control',component:CommentControlComponent},
    {path:'',redirectTo:'posts/all' ,pathMatch:'full'}
  ]},

];
@NgModule({
  declarations: [ PostControlComponent, PanelComponent, AllPostsComponent, AllCommentsComponent, CommentControlComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PanelModule { }
