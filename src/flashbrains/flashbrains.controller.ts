import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FlashbrainsService } from './flashbrains.service';
import { CreateFlashbrainDto } from './dto/create-flashbrain.dto';
import { UpdateFlashbrainDto } from './dto/update-flashbrain.dto';

@Controller('flashbrains')
export class FlashbrainsController {
  constructor(private readonly flashbrainsService: FlashbrainsService) {}

  @Post()
  create(@Body() createFlashbrainDto: CreateFlashbrainDto) {
    return this.flashbrainsService.create(createFlashbrainDto);
  }

  @Get()
  findAll() {
    return this.flashbrainsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.flashbrainsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFlashbrainDto: UpdateFlashbrainDto) {
    return this.flashbrainsService.update(+id, updateFlashbrainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.flashbrainsService.remove(+id);
  }
}
