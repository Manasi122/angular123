import { Component, OnInit } from '@angular/core';

import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  public students : any;
  public tests: any;
  constructor(private _studentService : StudentService) { 
    // _studentService.getTest().subscribe((data)=> this.tests = data)
  }
  registerData(data:any){

  }
  ngOnInit(): void {
    
    this._studentService.getTest().subscribe((data)=> this.tests = data);
    
    this.students = this._studentService.getStudents();
    console.log(this.tests);
  }
  // this.tests = this._studentService.postTest(data).subscribe((data)=> this.data = data);
}

    