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
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'auth_db',
      // esta es la clase de la entidad que representa la tabla users
      entities: [User, Post],
      synchronize: true, // sincroniza la base de datos con las entidades (solo en desarrollo)
    }),
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService,SeederService],
})
export class AppModule {}
