import { Module } from '@nestjs/common';
import { ParticularService } from './particular.service';
import { ParticularController } from './particular.controller';

@Module({
  controllers: [ParticularController],
  providers: [ParticularService]
})
export class ParticularModule {}
