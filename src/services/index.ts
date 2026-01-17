// Add your service classes and business logic here
import { User } from '../types';

export class UserService {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }
}