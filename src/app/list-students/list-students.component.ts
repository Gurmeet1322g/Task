import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { StudentData } from '../student-data';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  students:StudentData[];

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.get();
  }

  selectStudent(student:StudentData){
    this.studentService.remove(student);
  }

}
