import { Test, TestingModule } from '@nestjs/testing';
import { FlashbrainsService } from './flashbrains.service';

describe('FlashbrainsService', () => {
  let service: FlashbrainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlashbrainsService],
    }).compile();

    service = module.get<FlashbrainsService>(FlashbrainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
