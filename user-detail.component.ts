import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  users: User[];

 constructor(private service: UserService, private router: Router) { }
 
 ngOnInit(): void {
 this.getAllUsers();
 }
 getAllUsers() {
 this.service.getAllUsers().subscribe(
 data => {
 //on success
 this.users = data;
 },
 error => {
 //on fail
 console.log(error);
 }
 );
 }

}
