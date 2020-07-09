export class StudentData{
    name:string;
    rollNumber:number;
    email:string;
    gender:string;
    batch:number;
    course:string;
    dateOfBirth:string;
    constructor(name:string,rollnumber:number,email:string,gender:string,batch:number,course:string,dateOfBirth:string){
        this.name = name;
        this.rollNumber = rollnumber;
        this.email = email;
        this.gender = gender;
        this.batch = batch;
        this.course = course;
        this.dateOfBirth = dateOfBirth
    }

}