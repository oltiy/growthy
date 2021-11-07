import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';

import { UsersService } from './state/users.service';
import { User } from './user.interface';
import { CreateUserQuery } from '../create-user/state/create-user.query';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersQuery } from './state/users.query';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  dataSource = new MatTableDataSource<User>();
  filters = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    // openProjects: new FormControl(''),
    // workingOnProjects: new FormControl(''),
    // doneProjects: new FormControl(''),
  });
  updateUserTable = new BehaviorSubject<User[]>(this.dataSource.data);
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'phoneNumber',
    'email',
    // 'openProjects',
    // 'workingOnProjects',
    // 'doneProjects',
  ];

  constructor(
    private createUserQuery: CreateUserQuery,
    private userQuery: UsersQuery
  ) {
    this.createUserQuery.userData$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
