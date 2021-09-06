import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styles: [
  ]
})
export class TdfComponent implements OnInit {

  countryList = ['India', 'US', 'UK'];

  user;
  constructor() { 
 
  }


  ngOnInit(): void {
    this.user = {
      firstname: 'Sneha',
      lastname: 'Sharma',
      address:{
        city: 'Goa'
      }
    }

  }

  onSubmit(data:NgForm){
    console.log(data.value);
    // console.log(data);

  }

  resetForm(userForm:NgForm){
    userForm.resetForm({
      firstname: 'testUser',
      address:{
        city: 'delhi'
      }
    });

  }
}
