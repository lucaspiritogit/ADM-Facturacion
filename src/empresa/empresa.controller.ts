import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CadeteService } from 'src/cadete/cadete.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { LocalidadService } from 'src/localidad/localidad.service';
import { DemoraService } from 'src/demora/demora.service';
@Controller('empresa')
export class EmpresaController {
  constructor(
    private readonly empresaService: EmpresaService,
    private readonly cadeteService: CadeteService,
    private readonly localidadService: LocalidadService,
    private readonly demoraService: DemoraService,
  ) {}

  @Post()
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  async findAllEmpresas() {
    return await this.empresaService.findAll();
  }

  @Get('nuevoViajeEmpresa')
  @Render('nuevoViajeEmpresa')
  async findAll() {
    const empresas = await this.empresaService.findAll();
    const cadetes = await this.cadeteService.findAll();
    const localidades = await this.localidadService.findAll();
    const demoras = await this.demoraService.findAll();

    return { empresas, cadetes, localidades, demoras };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
