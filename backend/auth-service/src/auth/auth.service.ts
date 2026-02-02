import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Post } from '../users/entities/post.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { NotFoundException } from '@nestjs/common'

@Injectable()
export class AuthService {
    // Aquí irían los métodos para manejar la lógica de usuarios
    constructor(
        @InjectRepository(User)
        // la entidad User que representa la tabla users, es inyectada en el repositorio
        private usersRepository: Repository<User>,
        @InjectRepository(Post)
        private postsRepository: Repository<Post>,
    ) { }

    async createUser(username: string, password: string) {
        const findUser = await this.usersRepository.findOne({ where: { username } });
        if (findUser) {
            throw new Error('Username already exists');
        }
        // Hashea la contraseña antes de guardarla
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.usersRepository.create({ username, password: hashedPassword });
        const savedUser = await this.usersRepository.save(user);
        // me retorna un objeto del usuario creado
        return {
            id: user.id,
            username: user.username,
            createdAt: user.createdAt
        }
    }


    async Login(username: string, password: string) {
        const user = await this.usersRepository.findOne({ where: { username } });
        if (!user) {
            throw new Error('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const payload = { userId: user.id, username: user.username };
        const token = jwt.sign(payload, 'your_jwt_secret', {
            expiresIn: '1h',
        });

        return {
            accessToken: token,
            user: {
                id: user.id,
                username: user.username,
                createdAt: user.createdAt
            }
        };

    }

    async createpost(title: string, createdby: string, image_url?: string) {
        const post = this.postsRepository.create({ title, createdby, image_url });
        return await this.postsRepository.save(post);
    }

    async getallposts() {
        return this.postsRepository.find();
    }

    async getallUsers() {
        return this.usersRepository.find();
    }
    async getUserNameById(id: number) {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) return null;
        return { username: user.username };
    }



    async updatepost(id: number, newpost: string) {
        const post = await this.postsRepository.findOne({ where: { id } })

        if (!post) {
            throw new NotFoundException('Post no encontrado')
        }

        post.title = newpost
        return await this.postsRepository.save(post)
    }




}
