import { Test, TestingModule } from '@nestjs/testing';
import { FlashbrainsController } from './flashbrains.controller';
import { FlashbrainsService } from './flashbrains.service';

describe('FlashbrainsController', () => {
  let controller: FlashbrainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlashbrainsController],
      providers: [FlashbrainsService],
    }).compile();

    controller = module.get<FlashbrainsController>(FlashbrainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
