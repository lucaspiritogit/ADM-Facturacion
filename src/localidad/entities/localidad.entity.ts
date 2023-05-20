import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { Viaje } from 'src/viaje/entities/viaje.entity';

@Entity()
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;
}
