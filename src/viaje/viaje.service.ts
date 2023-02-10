import { Injectable } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';

@Injectable()
export class ViajeService {
  constructor(
    @InjectRepository(Viaje)
    private viajeRepository: Repository<Viaje>,
    @InjectRepository(Localidad)
    private localidadRepository: Repository<Localidad>,
    @InjectRepository(Empresa)
    private empresaRepository: Repository<Empresa>,
  ) {}

  async create(createViajeDto: CreateViajeDto) {
    const viaje = new Viaje();
    try {
      let empresaFound = await this.empresaRepository.findOne({
        where: { id: createViajeDto.empresa },
      });
      viaje.empresaNombre = empresaFound.nombre;
      viaje.empresa = createViajeDto.empresa;
    } catch (error: any) {
      if (error instanceof TypeError) {
        throw new TypeError('La empresa seleccionada no existe');
      } else {
        throw new Error(error);
      }
    }
    let location0Found = await this.localidadRepository.findOne({
      where: { id: createViajeDto.localidad0 },
    });
    try {
      let location1Found = await this.localidadRepository.findOne({
        where: { id: createViajeDto.localidad1 },
      });
      viaje.localidad1 = location1Found.nombre;
    } catch (error) {
      viaje.localidad1 = '';
    }

    try {
      let location2Found = await this.localidadRepository.findOne({
        where: { id: createViajeDto.localidad2 },
      });
      viaje.localidad2 = location2Found.nombre;
    } catch (error) {
      viaje.localidad2 = '';
    }

    try {
      let location3Found = await this.localidadRepository.findOne({
        where: { id: createViajeDto.localidad3 },
      });
      viaje.localidad3 = location3Found.nombre;
    } catch (error) {
      viaje.localidad3 = '';
    }

    try {
      let location4Found = await this.localidadRepository.findOne({
        where: { id: createViajeDto.localidad4 },
      });
      viaje.localidad4 = location4Found.nombre;
    } catch (error) {
      viaje.localidad4 = '';
    }

    viaje.localidad0 = location0Found.nombre;
    viaje.nombreDelSolicitante = createViajeDto.nombreDelSolicitante;
    viaje.destino0 = createViajeDto.destino0;
    viaje.destino1 = createViajeDto.destino1;
    viaje.destino2 = createViajeDto.destino2;
    viaje.destino3 = createViajeDto.destino3;
    viaje.destino4 = createViajeDto.destino4;
    viaje.conLluvia = createViajeDto.conLluvia;
    viaje.conBulto = createViajeDto.conBulto;
    viaje.conRegreso = createViajeDto.conRegreso;
    viaje.cadetes = createViajeDto.cadetes;
    viaje.saleDelDomicilio = createViajeDto.saleDelDomicilio;
    viaje.peajes = parseInt(createViajeDto.peajes);
    viaje.total = parseInt(createViajeDto.total);
    viaje.subTotal = createViajeDto.subTotal;
    viaje.fecha = createViajeDto.fecha;
    viaje.fecha_string = createViajeDto.fecha.toLocaleString('es-AR');

    return await this.viajeRepository.save(viaje);
  }

  async findAll() {
    return await this.viajeRepository.find();
  }

  async findOne(id: number) {
    return await this.viajeRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateViajeDto: UpdateViajeDto) {
    return `This action updates a #${id} viaje`;
  }

  remove(id: number) {
    return `This action removes a #${id} viaje`;
  }
}
