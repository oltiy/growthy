export interface UserStatus {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  openProjects?: Array<any>;
  workingOnProjects?: Array<any>;
  doneProjects: Array<any>;
}
