import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Cadete {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nombre: string;

  @Column()
  apodo: string;

  @Column({ nullable: true })
  apellido: string;
}
