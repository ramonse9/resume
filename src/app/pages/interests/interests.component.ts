import { Component, OnInit } from '@angular/core';
import { InfoResumeService } from 'src/app/services/info-resume.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html'
})
export class InterestsComponent implements OnInit {

  constructor( public service: InfoResumeService) { }

  ngOnInit(): void {
  }

}
