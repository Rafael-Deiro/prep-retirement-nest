import { Injectable, NotFoundException } from "@nestjs/common";

// Mock user class (will be replaced by the model/dto)
export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly userList: User[] = [
    {
      id: 1,
      first_name: 'Rafael',
      last_name: 'Deiro',
      email: 'rafaeldeiro@domain.com',
      password: '12345678',
    },
    {
      id: 2,
      first_name: 'John',
      last_name: 'Doe',
      email: 'johndoe@domain.com',
      password: '87654321',
    },
    {
      id: 3,
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'janedoe@domain.com',
      password: 'abcdefjh',
    },
  ];

  async findUserByEmail(email: string): Promise<User> {
    const user: User = this.userList.find((user) => user.email === email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
