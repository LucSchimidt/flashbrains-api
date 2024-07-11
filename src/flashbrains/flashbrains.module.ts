import { Module } from '@nestjs/common';
import { FlashbrainsService } from './flashbrains.service';
import { FlashbrainsController } from './flashbrains.controller';

@Module({
  controllers: [FlashbrainsController],
  providers: [FlashbrainsService],
})
export class FlashbrainsModule {}
