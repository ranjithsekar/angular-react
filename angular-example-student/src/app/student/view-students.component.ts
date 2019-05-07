import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';

import { STUDENTS } from '../../assets/student-data';

@Component({
  selector: 'app-view-students',
  templateUrl: './view-students.component.html',
  styleUrls: ['./view-students.component.css']
})
export class ViewStudentsComponent implements OnInit {

  students: Student[] = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
