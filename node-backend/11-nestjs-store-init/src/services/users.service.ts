import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/users.dtos';

@Injectable()
export class UsersService {
  private counter = 1;
  private users: User[] = [
    {
      id: 0,
      username: 'luissberenguer',
      password: 'luis1234',
      email: 'luis@gmail.com',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id == id);
    return user;
  }

  create(payload: CreateUserDto) {
    const newUser = {
      id: this.counter,
      ...payload,
    }
    this.counter++;
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, changes: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      const index = this.users.findIndex((item) => item.id == id);
      this.users[index] = {
        ...user,
        ...changes,
      }
      return this.users[index];
    }
    return null;
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id == id);
    this.users.splice(index, 1);
    return { message: true };
  }
}
