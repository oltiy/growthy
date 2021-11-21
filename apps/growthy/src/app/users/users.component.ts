import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user.interface';
import { CreateUserQuery } from '../create-user/state/create-user.query';

@Component({
  selector: 'growthy-users',
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
  });

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'phoneNumber', 'email'];

  constructor(private createUserQuery: CreateUserQuery) {
    this.createUserQuery.userData$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
