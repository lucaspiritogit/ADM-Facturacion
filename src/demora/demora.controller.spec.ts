import { Test, TestingModule } from '@nestjs/testing';
import { DemoraController } from './demora.controller';
import { DemoraService } from './demora.service';

describe('DemoraController', () => {
  let controller: DemoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemoraController],
      providers: [DemoraService],
    }).compile();

    controller = module.get<DemoraController>(DemoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
