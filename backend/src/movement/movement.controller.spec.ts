import { Test, TestingModule } from '@nestjs/testing';
import { MovementController } from './movement.controller';
import { MovementService } from './movement.service';

describe('MovementController', () => {
  let controller: MovementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementController],
      providers: [MovementService],
    }).compile();

    controller = module.get<MovementController>(MovementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
