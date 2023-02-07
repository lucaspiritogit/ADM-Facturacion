import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';
@Entity()
export class Particular extends Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  DNI: string;
}
