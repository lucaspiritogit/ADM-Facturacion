import { Injectable } from '@nestjs/common';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Viaje } from './entities/viaje.entity';
import { Localidad } from 'src/localidad/entities/localidad.entity';
import { Empresa } from 'src/empresa/entities/empresa.entity';

const MAX_LOCATIONS = 5;

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

    try {
      const locations = [];
      let localidad: Localidad;
      for (let i = 0; i < MAX_LOCATIONS; i++) {
        localidad = new Localidad();
        localidad.id = createViajeDto[`localidad${i}`];
        if (localidad.id == 0) {
          continue;
        }
        localidad.nombre = await this.getLocationName(
          createViajeDto[`localidad${i}`],
          this.localidadRepository,
        )
        locations.push(localidad);
      }
  
      let empresa = await this.empresaRepository.findOne({
        where: { id: createViajeDto.empresa },
      });
  
      viaje.empresaNombre = empresa.nombre;
      viaje.empresa = createViajeDto.empresa;
      let locationsName = locations.map((location) => location.nombre).join(', ');
      viaje.localidadArray = locationsName;
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
      viaje.total = createViajeDto.total;
      viaje.fecha_string = createViajeDto.fecha.toLocaleString('es-AR');
      return await this.viajeRepository.save(viaje);
    } catch (error) {
      console.log(error);
      return { error: "Exploto todo porque no se programar"}
    }
   

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

