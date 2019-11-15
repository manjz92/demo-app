import { Component, OnInit } from '@angular/core';
import { CommentData } from './entity/comment-data';
import { CommentFormService } from './comment-form.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  commentFormData: CommentData = new CommentData();
  isSuccess: boolean;
  isError: boolean;
  successMessage: string;
  errorMessage: string;
  constructor(private commentFormService: CommentFormService) { }

  ngOnInit() {
  }


  checkAlphabets(evt) {
    let k;
    document.all ? k = evt.keyCode : k = evt.which;
    return ((k >= 65 && k <= 90) || (k >= 97 && k <= 122) || k === 8 || k === 32);
  }



  saveCommentData() {
    this.isSuccess = false;
    this.isError = false;
    this.commentFormService.savecomment(this.commentFormData).subscribe(returnData => {
      console.log(returnData);
      this.setSuccessMessage('Feedback saved successfully');
      this.commentFormData = new CommentData();
    }, error => {
      alert('error ' + JSON.stringify(error));
      this.setErrorMessage(error);

    });
  }

  resetCommentData() {
    this.commentFormData = new CommentData();
  }


  public setSuccessMessage(message: string) {
    this.successMessage = message;
    this.isSuccess = true;
    setTimeout(() => {
      this.isSuccess = false;
    }, 6000);
  }

  public setErrorMessage(message: string) {
    this.errorMessage = message;
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 6000);
  }
}
