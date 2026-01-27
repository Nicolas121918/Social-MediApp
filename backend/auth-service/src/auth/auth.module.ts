import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { Post } from 'src/users/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post]), UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }