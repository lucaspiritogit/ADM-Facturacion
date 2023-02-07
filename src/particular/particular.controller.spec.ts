import { Test, TestingModule } from '@nestjs/testing';
import { ParticularController } from './particular.controller';
import { ParticularService } from './particular.service';

describe('ParticularController', () => {
  let controller: ParticularController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticularController],
      providers: [ParticularService],
    }).compile();

    controller = module.get<ParticularController>(ParticularController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
