import { UserStatus } from './user-status.interface';

export let userData: UserStatus[] = [
  {
    userId: 1,
    email: 'c@c.com',
    firstName: 'Lithium',
    lastName: 'yair',
    password: '9876',
    openProjects: ['a', 'b', 'c'],
    workingOnProjects: ['e', 'r'],
    doneProjects: ['f'],
  },
  {
    userId: 2,
    email: 'd@d.com',
    firstName: 'Beryllium',
    lastName: 'assaf',
    password: '5432',
    openProjects: ['a', 'b', 'c'],
    workingOnProjects: ['e', 'r'],
    doneProjects: ['f'],
  },
  {
    userId: 3,
    email: 'e@e.com',
    firstName: 'Boron',
    lastName: 'gorn',
    password: '0000',
    openProjects: ['d', 'f', 'g'],
    workingOnProjects: ['h', 'j'],
    doneProjects: ['k'],
  },
];
