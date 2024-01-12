// src/users/entities/profile.entity.ts
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('profile')
export class ProfileEntity {
  @PrimaryColumn()
  userId: number;

  @Column()
  gender: string;

  @Column()
  photo: string;

  // 일대일 연결 진행
  @OneToOne(() => UserEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  user: UserEntity;
}
