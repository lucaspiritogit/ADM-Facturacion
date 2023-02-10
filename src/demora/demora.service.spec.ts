import { Test, TestingModule } from '@nestjs/testing';
import { DemoraService } from './demora.service';

describe('DemoraService', () => {
  let service: DemoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemoraService],
    }).compile();

    service = module.get<DemoraService>(DemoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
