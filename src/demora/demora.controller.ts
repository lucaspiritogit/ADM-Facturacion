import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DemoraService } from './demora.service';
import { CreateDemoraDto } from './dto/create-demora.dto';
import { UpdateDemoraDto } from './dto/update-demora.dto';

@Controller('demora')
export class DemoraController {
  constructor(private readonly demoraService: DemoraService) {}

  @Post()
  create(@Body() createDemoraDto: CreateDemoraDto) {
    return this.demoraService.create(createDemoraDto);
  }

  @Get()
  findAll() {
    return this.demoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.demoraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDemoraDto: UpdateDemoraDto) {
    return this.demoraService.update(+id, updateDemoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.demoraService.remove(+id);
  }
}
