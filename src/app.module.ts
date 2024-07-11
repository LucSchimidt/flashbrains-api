import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlashbrainsModule } from './flashbrains/flashbrains.module';

@Module({
  imports: [FlashbrainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
