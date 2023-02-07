import { Injectable } from '@nestjs/common';
import { CreateCadeteDto } from './dto/create-cadete.dto';
import { UpdateCadeteDto } from './dto/update-cadete.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cadete } from './entities/cadete.entity';

@Injectable()
export class CadeteService {
  constructor(
    @InjectRepository(Cadete)
    private cadeteRepository: Repository<Cadete>,
  ) {}

  create(createCadeteDto: CreateCadeteDto) {
    return 'This action adds a new cadete';
  }

  async findAll() {
    return await this.cadeteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cadete`;
  }

  update(id: number, updateCadeteDto: UpdateCadeteDto) {
    return `This action updates a #${id} cadete`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadete`;
  }
}
