import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { TasksStore, TasksState } from './tasks.store';

@Injectable({ providedIn: 'root' })
export class TasksQuery extends Query<TasksState> {
  userStaskStatus$ = this.select('userStaskStatus');

  constructor(protected store: TasksStore) {
    super(store);
  }
}
