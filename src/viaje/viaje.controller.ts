import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Render,
  Redirect,
  Res,
  Req,
  Header,
} from '@nestjs/common';
import { ViajeService } from './viaje.service';
import { CreateViajeDto } from './dto/create-viaje.dto';
import { UpdateViajeDto } from './dto/update-viaje.dto';
import { BadRequestException, HttpException } from '@nestjs/common';

@Controller('viaje')
export class ViajeController {
  constructor(private readonly viajeService: ViajeService) {}

  @Post()
  async create(@Body() createViajeDto: CreateViajeDto, @Res() res) {
    try {
      await this.viajeService.create(createViajeDto);
    } catch (error: any) {
      throw error;
    }

    res.redirect('/viaje/viajeOk');
  }

  @Get('viajeOk')
  @Render('viajeOk')
  async viajeOk() {
    const idUltimoViajePersistido = await this.getLastIdFromDatabase();
    const viaje = await this.viajeService.findOne(idUltimoViajePersistido);
    const viajeJson = JSON.stringify(viaje);
    return { viajeJson };
  }

  async getLastIdFromDatabase() {
    const all = await this.viajeService.findAll();
    let lastId = 0;
    all.map((viaje) => {
      if (viaje.id > lastId) {
        lastId = viaje.id;
      }
    });
    return lastId;
  }

  @Get()
  @Render('listadoDeViajes')
  async findAll() {
    const viajes = await this.viajeService.findAll();
    viajes.map((viaje) => {
      const localidades = Object.keys(viaje).filter((key) =>
        key.startsWith('localidad'),
      );
      let localidadesJoined = (viaje.localidad0 = localidades
        .map((localidad) => viaje[localidad])
        .filter(Boolean)
        .join(','));

      const destinos = Object.keys(viaje).filter((key) =>
        key.startsWith('destino'),
      );
      let destinosJoined = (viaje.destino0 = destinos
        .map((destino) => viaje[destino])
        .filter(Boolean)
        .join(','));
    });
    return { viajes };
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.viajeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateViajeDto: UpdateViajeDto) {
    return this.viajeService.update(+id, updateViajeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.viajeService.remove(+id);
  }
}
