import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParticularService } from './particular.service';
import { CreateParticularDto } from './dto/create-particular.dto';
import { UpdateParticularDto } from './dto/update-particular.dto';

@Controller('particular')
export class ParticularController {
  constructor(private readonly particularService: ParticularService) {}

  @Post()
  create(@Body() createParticularDto: CreateParticularDto) {
    return this.particularService.create(createParticularDto);
  }

  @Get()
  findAll() {
    return this.particularService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.particularService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParticularDto: UpdateParticularDto) {
    return this.particularService.update(+id, updateParticularDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.particularService.remove(+id);
  }
}
