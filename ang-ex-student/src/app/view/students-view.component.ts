import { Component, OnInit } from '@angular/core';

import { Student } from '../model/student.model';
import { STUDENTS } from '../assets/data';

@Component({
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.css']
})
export class StudentsViewComponent implements OnInit {

  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
