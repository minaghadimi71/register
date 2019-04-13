import { Component, OnInit } from '@angular/core';
import {User} from '../../user';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User;
  users: User[];
  show: boolean = true;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  onShow() {
    this.show = false;
    this.user = {
      id: this.userservice.getId(this.users),
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
      email: this.profileForm.get('email').value,
    };
  }

  delete() {
    this.show = true;
  }
  constructor(private userservice: UserService) { }
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userservice.getUsers().subscribe(op => this.users = op);
  }

  onSubmit() {
    this.user = {
      id: this.userservice.getId(this.users),
      firstName: this.profileForm.get('firstName').value,
      lastName: this.profileForm.get('lastName').value,
      email: this.profileForm.get('email').value,
    };
    this.userservice.addUser(this.user).subscribe();
    this.getUsers();
  }

}
