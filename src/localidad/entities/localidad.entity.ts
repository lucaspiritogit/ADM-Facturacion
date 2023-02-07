import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;
}
