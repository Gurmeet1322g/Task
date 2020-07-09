import { StudentData } from './student-data';
import { Subject } from 'rxjs';

export class StudentService{

    newRecord = new Subject<StudentData[]>();
    
    private students:StudentData[]=[new StudentData('Gurmeet',160550005,'gurmeet1322g@gmail.com','Male',2016,'B.tech','20/08/1995')]
    get(){
        return this.students;
    }

    set(data:StudentData){
        this.students.push(data);
        this.newRecord.next(this.students);
    }

    remove(data:StudentData){
        this.students.forEach((value,index)=>{
            if(data.name===value.name && data.rollNumber===value.rollNumber){
                this.students.splice(index,1);


                
            }
        })
    }
}