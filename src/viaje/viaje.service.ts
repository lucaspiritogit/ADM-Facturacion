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

  async getLocationName(
    localidadId: number,
    localidadRepository: Repository<Localidad>,
  ) {
    try {
      let locationFound = await localidadRepository.findOne({
        where: { id: localidadId },
      });
      return locationFound.nombre;
    } catch (error) {
      return '';
    }
  }

  async create(createViajeDto: CreateViajeDto) {
    const viaje = new Viaje();

    let location0Found = await this.getLocationName(
      createViajeDto.localidad0,
      this.localidadRepository,
    );
    let location1Found = await this.getLocationName(
      createViajeDto.localidad1,
      this.localidadRepository,
    );
    let location2Found = await this.getLocationName(
      createViajeDto.localidad2,
      this.localidadRepository,
    );
    let location3Found = await this.getLocationName(
      createViajeDto.localidad3,
      this.localidadRepository,
    );
    let location4Found = await this.getLocationName(
      createViajeDto.localidad4,
      this.localidadRepository,
    );

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

    viaje.localidad0 = location0Found;
    viaje.localidad1 = location1Found || '';
    viaje.localidad2 = location2Found || '';
    viaje.localidad3 = location3Found || '';
    viaje.localidad4 = location4Found || '';
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
    viaje.demora = createViajeDto.demora;
    viaje.peajes = parseInt(createViajeDto.peajes);
    viaje.subTotal = createViajeDto.subTotal;
    viaje.total = parseInt(createViajeDto.total);

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

  async remove(id: number) {
    return await this.viajeRepository.delete(id);
  }
}
