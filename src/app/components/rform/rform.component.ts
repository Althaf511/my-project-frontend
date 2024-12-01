import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.scss']
})
export class RformComponent implements OnInit {

  contactform : any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactform = this.fb.group({
      firstname : ['',Validators.required],
      secondname : ['',Validators.required],
      number : ['',[Validators.required,Validators.minLength(2)]]
    })
  }

  onSubmit() {
    console.log(this.contactform.value);
    if(!this.contactform.valid){
      window.alert('Please fill all details')
      return
    }

    window.alert('Form submitted')
  }

  get fc(){
    return this.contactform.controls;
  }

}
