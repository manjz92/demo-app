import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentFormComponent } from './comment-form/comment-form.component';

const routes: Routes = [
  {
    path: '',
    component: CommentFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
