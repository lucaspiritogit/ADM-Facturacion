import { Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    // Hash the password with bcrypt
    user.password = await bcrypt.hash(user.password, 10);
    // Save the new user to the database
    return this.userRepository.save(user);
  }

  async login(usuario: string, password: string): Promise<User | null> {
    // Find the user by email
    const user = await this.userRepository.findOne({ where: { usuario } });
    if (!user) {
      return null;
    }

    // Compare the provided password with the hashed password in the database
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return null;
    }

    // Return the user if the password is valid
    return user;
  }
}
