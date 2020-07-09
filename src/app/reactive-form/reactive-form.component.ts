import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentData} from '../student-data';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  form:FormGroup

  genders:string[]=['male','femail']
  years:number[]=[2000,2001,2002,2003,2004,2005]
  courses:string[]=['B.tech','BA','B.ed','M.ed','BCA']

  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null,Validators.required),
      'rollNumber': new FormControl(null,Validators.required),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'gender': new FormControl('male'),
      'batch': new FormControl('Select Batch',Validators.required),
      'course': new FormControl('Select Course',Validators.required),
      'dateOfBirth': new FormControl('',Validators.required)
    })
  }

  onSubmit(){
    const student = new StudentData(this.form.value.name,this.form.value.rollNumber,this.form.value.email,this.form.value.gender,this.form.value.batch,this.form.value.course,this.form.value.dateOfBirth);
    this.studentService.set(student);

    this.form.reset()
  }

}
