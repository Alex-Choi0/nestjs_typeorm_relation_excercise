import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileEntity } from './entities/profile.entity';
import { UserEntity } from './entities/user.entity';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ProfileEntity])],
  controllers: [UsersController],
})
export class UsersModule {}
