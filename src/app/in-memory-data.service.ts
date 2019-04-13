import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      {id: 1, firstName: 'Mina',
        lastName: 'Ghadimi',
        email: 'mina@gmail.com'
      },
      {id: 2, firstName: 'Ali',
        lastName: 'Ahmadi',
        email: 'mina@gmail.com'
      },
    ];
    return {users};
  }
  constructor() { }
}
