import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[];
  b: boolean = true;
  constructor(private userservice: UserService, private route: Router) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().subscribe(op => this.users = op);
  }
  routing(id: number) {
    this.route.navigate(['/user', id]);
  }
  bar() {
    this.b = false;
  }

  bar1() {
    this.b = true;
  }
}
