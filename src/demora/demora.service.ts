import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDemoraDto } from './dto/create-demora.dto';
import { UpdateDemoraDto } from './dto/update-demora.dto';
import { Demora } from './entities/demora.entity';
@Injectable()
export class DemoraService {
  constructor(
    @InjectRepository(Demora)
    private demoraRepository: Repository<Demora>,
  ) {}

  create(createDemoraDto: CreateDemoraDto) {
    return 'This action adds a new demora';
  }

  findAll() {
    return this.demoraRepository.find();
  }

  findOne(id: number) {
    return this.demoraRepository.findOne({ where: { id } });
  }

  update(id: number, updateDemoraDto: UpdateDemoraDto) {
    return `This action updates a #${id} demora`;
  }

  remove(id: number) {
    return `This action removes a #${id} demora`;
  }
}
