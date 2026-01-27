import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

// tabla publicaciones
@Entity()
export class Post {
    // id autoincrement
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    // el id del usuario que creo la publicacion
    @Column()
    createdby: number;

    @CreateDateColumn()
    createdAt: Date;

    @Column({ nullable: true, type: 'text' })
    image_url: string | null;
}

