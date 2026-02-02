// src/seeder/seeder.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Post } from 'src/users/entities/post.entity';
import * as bcrypt from 'bcrypt';

/* le dice a nest que va ser un servicio que puede ser usado en otras partes del codigo  */
@Injectable()
export class SeederService {
    private logger = new Logger('Seeder');
    /* objeto principal de typeorm que se entiende con Postgres */
    constructor(private dataSource: DataSource) { }

    async run() {
        const userRepo = this.dataSource.getRepository(User);
        const postRepo = this.dataSource.getRepository(Post);

        // Si ya hay usuarios, no hacer nada
        if (await userRepo.count()) return this.logger.log('Seeder ya ejecutado');

        // Usuarios de prueba
        const users = ['alice', 'bob', 'charlie'];

        for (const name of users) {
            // Crear usuario
            const user = await userRepo.save({
                username: name,
                password: await bcrypt.hash('1234', 10),
            });

            // Crear publicación asociada
            await postRepo.save({
                title: `Primera publicación de ${name}`,
                createdby: user.username,
                image_url: "https://img.freepik.com/foto-gratis/codificacion-programas-informaticos-pantalla_53876-138060.jpg?semt=ais_hybrid&w=740&q=80",
            });
        }
    }
}
