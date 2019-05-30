import { Student } from '../model/student.model';
import { Department } from '../model/department.model';

export const DEPARTMENTS: Department[] = [
  {
    "id": 1,
    "name": "Computer Science"
  },
  {
    "id": 2,
    "name": "Electrical"
  },
  {
    "id": 3,
    "name": "Electronics"
  },
  {
    "id": 4,
    "name": "Civil"
  }
]

export const STUDENTS: Student[] = [
  {
    "regNo": 1001,
    "fullname": "Ranjith Sekar",
    "address": "Chennai",
    "gender": "Male",
    "phone": 12345,
    "email": "ranjith@gmail.com",
    "knownLanguages": ["English", "Tamil"],
    "photo": "/assets/photos/ranjith.jpg"
  },
  {
    "regNo": 1002,
    "fullname": "Kabilan Ranjith",
    "address": "Hydrabad",
    "gender": "Male",
    "phone": 67890,
    "email": "kabilan@gmail.com",
    "knownLanguages": ["English", "Tamil"],
    "photo": "/assets/photos/kabilan.jpg"
  },
  {
    "regNo": 1003,
    "fullname": "Nivedha Ranjith",
    "address": "Bangalore",
    "gender": "Female",
    "phone": 45454,
    "email": "nivedha@gmail.com",
    "knownLanguages": ["English", "Tamil"],
    "photo": "/assets/photos/nivedha.png"
  }
]