import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @JoinColumn()
  @ManyToOne(() => Empresa, (empresa) => empresa.id)
  empresa: number;

  @Column()
  empresaNombre: string;

  @Column()
  localidad0: string;

  @Column()
  localidad1: string;

  @Column()
  localidad2: string;

  @Column()
  localidad3: string;

  @Column()
  localidad4: string;

  @Column()
  destino0: string;

  @Column()
  destino1: string;

  @Column()
  destino2: string;

  @Column()
  destino3: string;

  @Column()
  destino4: string;

  @Column()
  total: number;

  @Column()
  subTotal: string;

  @Column()
  conLluvia: string;

  @Column()
  conBulto: string;

  @Column()
  conDemora: string;

  @Column()
  conRegreso: string;

  @Column()
  saleDelDomicilio: string;

  @Column()
  fecha: Date;

  @Column()
  fecha_string: string;

  @Column()
  nombreDelSolicitante: string;
}
