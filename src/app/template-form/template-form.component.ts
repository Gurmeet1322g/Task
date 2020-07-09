import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';
import { StudentData } from '../student-data';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  genders:string[]=['Male','Femail']
  years:number[]=[2000,2001,2002,2003,2004,2005]
  courses:string[]=['B.tech','BA','B.ed','M.ed','BCA']
  @ViewChild('form') form:NgForm;

  students:StudentData[];
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.get()
    // console.log(this.students)
  }

  onSubmit(){
    const student = new StudentData(this.form.value.name,this.form.value.rollNumber,this.form.value.email,this.form.value.gender,this.form.value.batch,this.form.value.course,this.form.value.dateOfBirth);
    this.studentService.set(student);
   this.form.reset();
  }
}
