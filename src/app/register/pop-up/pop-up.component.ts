import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../user';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  @Input() user: User;
  @Output() cancel = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(this.user.firstName);
  }
  delete() {
    this.cancel.emit();
  }
}
