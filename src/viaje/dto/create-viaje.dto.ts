import { IsNotEmpty, IsOptional } from 'class-validator';
export class CreateViajeDto {
  total: number;

  subTotal: string;

  empresa: number;

  localidad0: number;

  @IsOptional()
  localidad1: number;

  @IsOptional()
  localidad2: number;

  @IsOptional()
  localidad3: number;

  @IsOptional()
  localidad4: number;

  destino0: string;

  destino1: string;

  destino2: string;

  destino3: string;

  destino4: string;

  cadetes: string;

  conLluvia: string;

  conBulto: string;

  demora: number;

  conRegreso: string;

  peajes: string;

  saleDelDomicilio: string;

  @IsNotEmpty()
  fecha: Date;

  nombreDelSolicitante: string;
}
