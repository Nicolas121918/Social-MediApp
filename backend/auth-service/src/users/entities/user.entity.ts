import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

// tabla users
@Entity()
export class User {
    // id creado automáticamente
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  // typeorm maneja automáticamente la fecha de creación
  @CreateDateColumn()
  createdAt: Date;
}