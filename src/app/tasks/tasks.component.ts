import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../users/user.interface';
import { UsersQuery } from '../users/state/users.query';
import { TasksQuery } from './state/tasks.query';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  dataSource = new MatTableDataSource<User>();
  filters = new FormGroup({
    // id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    openProjects: new FormControl(''),
    workingOnProjects: new FormControl(''),
    doneProjects: new FormControl(''),
  });

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'firstName',
    'lastName',
    'openProjects',
    'workingOnProjects',
    'doneProjects',
  ];

  constructor(private tasksQuery: TasksQuery, private userQuery: UsersQuery) {
    this.tasksQuery.userStaskStatus$.subscribe((data) => {
      this.dataSource.data = data;
    });
  }
}
