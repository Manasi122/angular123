import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  submitted:boolean=false;
  constructor(private router: Router) { 

  }

  ngOnInit(): void {
  }

  // language:string[] = ['Python','Java', 'PHP', '.Net']; 
  register(){
    this.router.navigate(['/dashboard'])
  } 
  
  
  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value);
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    alert('SUCCESS!')
  }
  registerForm = new FormGroup({
    fname:new FormControl('',Validators.required),
    lname:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@+[a-z0-9.-]+([\.][a-z]{2,4})$")]),
    gender:new FormControl('',Validators.required),
    country:new FormControl('',Validators.required),
    // language:new FormControl('',Validators.required),
    mobno: new FormControl('', [Validators.required,Validators.pattern('^[0-9]{10,10}'), Validators.maxLength(10)]),
  })
  
  
}
