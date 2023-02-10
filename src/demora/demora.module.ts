import { Module } from '@nestjs/common';
import { DemoraService } from './demora.service';
import { DemoraController } from './demora.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Demora } from './entities/demora.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Demora])],

  controllers: [DemoraController],
  providers: [DemoraService],
})
export class DemoraModule {}
