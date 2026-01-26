import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'auth_db',
      autoLoadEntities: true,
      synchronize: true, // SOLO PARA PRUEBA TÉCNICA EN PRODUCCIÓN DEBE SER FALSE
    }),
     UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
