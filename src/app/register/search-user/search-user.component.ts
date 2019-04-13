import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from '../../user';
import {UserService} from '../../user.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  display: boolean = false;
  users$: Observable<User[]>;
  users: User[] = [];
  private searchTerms = new Subject<string>();
  @Output() play = new EventEmitter<boolean>();
  @Output() blur = new EventEmitter<boolean>();
  constructor(private userService: UserService, private route: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.display = true;
    this.searchTerms.next(term);
    this.play.emit();
    this.users$.subscribe(op => this.users = op);
  }
  blur1() {
    this.display = false;
    this.blur.emit();
  }
  routing(id: number) {
    this.route.navigate(['/user', id]);
  }

  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        debounceTime(300),

        // ignore new term if same as previous term
        distinctUntilChanged(),

        // switch to new search observable each time the term changes
        switchMap((term: string) => this.userService.searchFirstName(term)),

    );
  }

}
