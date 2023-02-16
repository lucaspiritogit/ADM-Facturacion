import { IsNotEmpty, IsNumber, IsPositive, IsOptional } from 'class-validator';
export class CreateViajeDto {
  total: string;

  subTotal: string;

  empresaId: number;

  empresa: number;

  localidadId: number;

  localidad0: number;

  @IsOptional()
  localidad1: number;

  @IsOptional()
  localidad2: number;

  localidad3: number;

  localidad4: number;

  destino: string;

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

  fecha_string: string;

  nombreDelSolicitante: string;
}
