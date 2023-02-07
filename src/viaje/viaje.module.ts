import { Module } from '@nestjs/common';
import { ViajeService } from './viaje.service';
import { ViajeController } from './viaje.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { LocalidadService } from 'src/localidad/localidad.service';
import { Empresa } from 'src/empresa/entities/empresa.entity';
import { EmpresaService } from 'src/empresa/empresa.service';
@Module({
  imports: [TypeOrmModule.forFeature([Viaje, Localidad, Empresa])],
  controllers: [ViajeController],
  providers: [ViajeService, LocalidadService, EmpresaService],
})
export class ViajeModule {}
