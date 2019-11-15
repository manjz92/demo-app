import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { DataService } from '../data.service';


@Injectable()
export class CommentFormService {

    constructor(private dataService: DataService) {
    }

    savecomment(saveData) {
        return this.dataService.addObject('http://localhost:8083/api/' + 'comment-form/save', JSON.stringify(saveData));
      }

}
