import { Module } from '@nestjs/common';
import { CadeteService } from './cadete.service';
import { CadeteController } from './cadete.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cadete } from './entities/cadete.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Cadete])],
  controllers: [CadeteController],
  providers: [CadeteService],
})
export class CadeteModule {}
