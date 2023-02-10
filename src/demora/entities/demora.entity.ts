import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
@Entity()
export class Demora {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tiempo: string;

  @Column()
  precio: number;
}
