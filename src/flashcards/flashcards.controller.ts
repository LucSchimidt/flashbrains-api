import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { FlashcardsService } from './flashcards.service';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { Flashcard } from './entities/flashcard.entity';
import { promises } from 'dns';

@Controller('flashcards')
@UsePipes(new ValidationPipe({ transform: true }))
export class FlashcardsController {
  constructor(private readonly flashcardsService: FlashcardsService) {}

  @Post('create/')
  create(@Body() createFlashcardDto: CreateFlashcardDto):Promise<string> {
    return this.flashcardsService.create(createFlashcardDto);
  }

  @Get('items/')
  findAll(): Promise<Flashcard[]> {
    return this.flashcardsService.findAll();
  }

  @Get('items/id/:id')
  findById(@Param('id') id: string) {
    return this.flashcardsService.findById(+id);
  }

  @Get('items/name/:name')
  findByName(@Param('name') name: string): Promise<Flashcard[]> {
    return this.flashcardsService.findByName(name);
  }

  @Get('items/subj/:subject')
  findBySubject(@Param('subject') subject: string):Promise<Flashcard[]> {
    return this.flashcardsService.findBySubject(subject);
  }

  @Get('items/date/:date')
  findByNextDate(@Param('date') date: string): Promise<Flashcard[]> {
    return this.flashcardsService.findByDate(date);
  }

  @Patch('update/id/:id')
  update(@Param('id') id: string, @Body() updateFlashcardDto: UpdateFlashcardDto) {
    return this.flashcardsService.update(+id, updateFlashcardDto);
  }

  @Delete('delete/id/:id')
  remove(@Param('id') id: string) {
    return this.flashcardsService.remove(+id);
  }
}
