import { Test, TestingModule } from '@nestjs/testing';
import { ParticularService } from './particular.service';

describe('ParticularService', () => {
  let service: ParticularService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticularService],
    }).compile();

    service = module.get<ParticularService>(ParticularService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
