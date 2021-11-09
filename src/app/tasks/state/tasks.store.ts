import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { userData } from '../../users/user-status-data';
import { UserStatus } from '../../users/user-status.interface';

export interface TasksState {
  userStaskStatus: UserStatus[];
}

export function createInitialState(): TasksState {
  return {
    userStaskStatus: userData,
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'tasks' })
export class TasksStore extends Store<TasksState> {
  constructor() {
    super(createInitialState());
  }
}
