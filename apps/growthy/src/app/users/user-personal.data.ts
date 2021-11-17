import { User } from '../users/user.interface';

export let users: User[] = [
  {
    userId: 1,
    email: 'a@a.com',
    firstName: 'Hydrogen',
    lastName: 'cohen',
    password: '1234',
    phoneNumber: '0505551111',
    admin: true,
  },
  {
    userId: 2,
    email: 'b@b.com',
    firstName: 'Helium',
    lastName: 'levi',
    password: '5678',
    phoneNumber: '0505552222',
    admin: true,
  },
  {
    userId: 3,
    email: 'c@c.com',
    firstName: 'Lithium',
    lastName: 'yair',
    password: '9876',
    phoneNumber: '0505553333',
    admin: false,
  },
  {
    userId: 4,
    email: 'd@d.com',
    firstName: 'Beryllium',
    lastName: 'assaf',
    password: '5432',
    phoneNumber: '0505554444',
    admin: false,
  },
  {
    userId: 5,
    email: 'e@e.com',
    firstName: 'Boron',
    lastName: 'gorn',
    password: '0000',
    phoneNumber: '0505555555',
    admin: false,
  },
];
