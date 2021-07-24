import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {
  users:any=[];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(d => {
       this.users = d;
    })
  }

}
