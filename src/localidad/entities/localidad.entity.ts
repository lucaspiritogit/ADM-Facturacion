import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';

import { Viaje } from 'src/viaje/entities/viaje.entity';

@Entity()
export class Localidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  precio: number;

  @OneToMany(() => Viaje, (viaje) => viaje.localidades, { cascade: true })
  viajes: Viaje[];
}
