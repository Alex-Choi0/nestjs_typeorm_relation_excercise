// src/users/entities/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', nullable: false, unique: true })
  nickname: string;
}
