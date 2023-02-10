import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from './entities/empresa.entity';
import { CadeteService } from 'src/cadete/cadete.service';
import { Cadete } from 'src/cadete/entities/cadete.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { LocalidadService } from 'src/localidad/localidad.service';
import { Demora } from 'src/demora/entities/demora.entity';
import { DemoraService } from 'src/demora/demora.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa, Cadete, Localidad, Demora])],
  controllers: [EmpresaController],
  providers: [EmpresaService, CadeteService, LocalidadService, DemoraService],
})
export class EmpresaModule {}
