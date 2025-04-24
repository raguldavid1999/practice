import { Component } from '@angular/core';
import { SubjectLearnService } from '../../services/subject-learn.service';

@Component({
  selector: 'app-redirect',
  imports: [],
  templateUrl: './redirect.component.html',
  styleUrl: './redirect.component.scss'
})
export class RedirectComponent {
  listofData:string[] = [];
  constructor(private subjectService: SubjectLearnService){
    this.listofData = this.subjectService.sampleList;
  }
}
