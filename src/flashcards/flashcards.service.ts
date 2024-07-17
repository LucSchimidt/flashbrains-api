import { HttpException, Injectable } from '@nestjs/common';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flashcard } from './entities/flashcard.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlashcardsService {
  constructor(
    @InjectRepository(Flashcard)
    private readonly flashcardRepository: Repository<Flashcard>,
  ) {}

  //Metodo que cria um novo flashcard no banco de dados:
  async create(createFlashcardDto: CreateFlashcardDto):Promise<string> {

    try {
      const newFlashcard = this.flashcardRepository.create(createFlashcardDto);
      await this.flashcardRepository.save(newFlashcard);

    } catch(err) {
      return err
    }

    return 'Flashcard criado com sucesso!'
  }

  findAll() {
    return `This action returns all flashcards`;
  }

  findById(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  findByName(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  findBySubject(id: number) {
    return `This action returns a #${id} flashcard`;
  }


  findByDate(id: number) {
    return `This action returns a #${id} flashcard`;
  }

  update(id: number, updateFlashcardDto: UpdateFlashcardDto) {
    return `This action updates a #${id} flashcard`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashcard`;
  }
}
