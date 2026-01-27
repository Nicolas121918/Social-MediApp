import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Post } from './entities/post.entity';


@Module({
  // Importa la entidad User para que TypeORM la reconozca
  imports: [TypeOrmModule.forFeature([User, Post])],
  // Proporciona el servicio de usuarios
  providers: [UsersService],
  // Define el controlador de usuarios
  controllers: [UsersController],
  // exporta el servicio de usuarios para que pueda ser utilizado en otros módulos
  exports: [UsersService],
})
export class UsersModule { }
