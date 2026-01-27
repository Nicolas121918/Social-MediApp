import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SeederService } from './seeder/seeder.service';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  const seeder = app.get(SeederService);
  await seeder.run(); // se ejecuta el seeder al iniciar el servidor 
  app.enableCors(); // Habilita CORS para todas las rutas y orígenes
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();