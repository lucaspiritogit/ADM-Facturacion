import { Injectable } from '@nestjs/common';
import { CreateParticularDto } from './dto/create-particular.dto';
import { UpdateParticularDto } from './dto/update-particular.dto';

@Injectable()
export class ParticularService {
  create(createParticularDto: CreateParticularDto) {
    return 'This action adds a new particular';
  }

  findAll() {
    return `This action returns all particular`;
  }

  findOne(id: number) {
    return `This action returns a #${id} particular`;
  }

  update(id: number, updateParticularDto: UpdateParticularDto) {
    return `This action updates a #${id} particular`;
  }

  remove(id: number) {
    return `This action removes a #${id} particular`;
  }
}
