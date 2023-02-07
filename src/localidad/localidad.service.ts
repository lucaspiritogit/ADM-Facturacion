import { Injectable } from '@nestjs/common';
import { CreateLocalidadDto } from './dto/create-localidad.dto';
import { UpdateLocalidadDto } from './dto/update-localidad.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Localidad } from './entities/localidad.entity';
@Injectable()
export class LocalidadService {
  constructor(
    @InjectRepository(Localidad)
    private localidadRepository: Repository<Localidad>,
  ) {}

  create(createLocalidadDto: CreateLocalidadDto) {
    return 'This action adds a new localidad';
  }

  async findAll() {
    return await this.localidadRepository.find();
  }

  async findOne(id: number) {
    return await this.localidadRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateLocalidadDto: UpdateLocalidadDto) {
    return `This action updates a #${id} localidad`;
  }

  remove(id: number) {
    return `This action removes a #${id} localidad`;
  }
}
