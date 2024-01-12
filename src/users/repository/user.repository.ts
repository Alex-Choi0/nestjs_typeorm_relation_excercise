// src/users/repository/user.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
  ) {}

  // Create a new user
  async createUser(nickname: string): Promise<UserEntity> {
    const newUser = this.userEntity.create({ nickname });
    return this.userEntity.save(newUser);
  }

  // Read (get) a single user by ID
  async getUserById(id: number): Promise<UserEntity | undefined> {
    return this.userEntity.findOne({ where: { id }, relations: ['profile'] });
  }

  // Read (get) all users
  async getAllUsers(): Promise<UserEntity[]> {
    return this.userEntity.find({ relations: ['profile'] });
  }

  // Update a user by ID
  async updateUser(
    id: number,
    updateData: Partial<UserEntity>,
  ): Promise<UserEntity> {
    await this.userEntity.update(id, updateData);
    return this.getUserById(id);
  }

  // Delete a user by ID
  async deleteUser(id: number): Promise<void> {
    await this.userEntity.delete(id);
  }
}
