import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    // Aquí irían los métodos para manejar la lógica de usuarios
    constructor(
        @InjectRepository(User)
        // la entidad User que representa la tabla users, es inyectada en el repositorio
        private usersRepository: Repository<User>,
    ) { }

    async createUser(username: string, password: string) {
        const findUser = await this.usersRepository.findOne({ where: { username } });
        if (findUser) {
            throw new Error('Username already exists');
        }
        // Hashea la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({ username, password: hashedPassword });
        // me retorna un objeto del usuario creado
        return {
            id: user.id,
            username: user.username,
            createdAt: user.createdAt
        }
    }
}
