// define que este archivo es un módulo de NestJS
import { Module } from '@nestjs/common';
// esto permite integrar TypeORM con NestJS y configurar la conexión a la base de datos
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SeederService } from './seeder/seeder.service';
import { AuthModule } from './auth/auth.module';
import { Post } from './users/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'auth_db',
      entities: [User, Post],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    TypeOrmModule.forFeature([User, Post]), // <- necesario para inyectar repositorios en SeederService
  ],
  controllers: [AppController],
  providers: [AppService, SeederService],
})
export class AppModule { }

