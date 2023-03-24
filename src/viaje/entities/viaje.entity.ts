import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Empresa } from 'src/empresa/entities/empresa.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @ManyToOne(() => Empresa, (empresa) => empresa.id)
  empresa: number;

  @Column({ nullable: true })
  empresaNombre: string;

  @Column({ nullable: true })
  localidad0: string;

  @Column({ nullable: true })
  localidad1: string;

  @Column({ nullable: true })
  localidad2: string;

  @Column({ nullable: true })
  localidad3: string;

  @Column({ nullable: true })
  localidad4: string;

  @Column({ nullable: true })
  destino0: string;

  @Column({ nullable: true })
  destino1: string;

  @Column({ nullable: true })
  destino2: string;

  @Column({ nullable: true })
  destino3: string;

  @Column({ nullable: true })
  destino4: string;

  @Column('decimal', { nullable: false, precision: 10, scale: 2 })
  total: number;

  @Column({ nullable: true })
  subTotal: string;

  @Column({ nullable: true })
  conLluvia: string;

  @Column({ nullable: true })
  conBulto: string;

  @Column({ nullable: true })
  conRegreso: string;

  @Column({ nullable: true })
  demora: number;

  @Column({ nullable: true })
  cadetes: string;

  @Column({ nullable: true })
  saleDelDomicilio: string;

  @Column({ nullable: true })
  peajes: number;

  @Column({ nullable: true })
  fecha_string: string;

  @Column({ nullable: true })
  nombreDelSolicitante: string;
}
