import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentFormService } from './comment-form/comment-form.service';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CommentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CommentFormService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
