import { Test, TestingModule } from '@nestjs/testing';
import { MovementService } from './movement.service';

describe('MovementService', () => {
  let service: MovementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovementService],
    }).compile();

    service = module.get<MovementService>(MovementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
