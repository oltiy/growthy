import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStatus } from 'src/app/users/user-status.interface';
import { TasksState, TasksStore } from './tasks.store';

@Injectable({ providedIn: 'root' })
export class TasksService {
  constructor(private tasksStore: TasksStore, private http: HttpClient) {}
  addToUsersStauts(userStaskStatus: UserStatus[]) {
    this.tasksStore.update((userState: TasksState) => {
      return { ...userState, userStaskStatus };
    });
  }
}
