import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';

import { Student } from '../model/student.model';
import { Department } from '../model/department.model';
import { STUDENTS, DEPARTMENTS } from '../assets/data';

@Component({
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {

  gender = "male";
  departments: Department[] = DEPARTMENTS;
  department = "4";
  students: Student[] = STUDENTS;
  datePickerConfig: Partial<BsDatepickerConfig>;
  photoPreview = false;

  student: Student = {
    regNo: null,
    fullname: null,
    address: null,
    gender: null,
    phone: null,
    email: null,
    knownLanguages: null,
    photo: null
  }

  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 2, 1),
        maxDate: new Date(2018, 11, 1),
        dateInputFormat: 'DD/MMM/YYYY'
      });
  }

  togglePhotoPreview() {
    this.photoPreview = !this.photoPreview;
  }
  ngOnInit() {
  }

  addStudent(studForm: NgForm): void {
    console.log(studForm.value);
  }

}
