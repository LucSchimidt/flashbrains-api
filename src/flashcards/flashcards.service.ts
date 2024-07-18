import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFlashcardDto } from './dto/create-flashcard.dto';
import { UpdateFlashcardDto } from './dto/update-flashcard.dto';
import { Flashcard } from './entities/flashcard.entity';

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
      throw new HttpException(`Erro ao salvar flashcard no banco de dados.`, 400)
    }

    return 'Flashcard criado com sucesso!'
  }

  //Metodo que puxa TODOS os flashcards do banco de dados:
  async findAll(): Promise<Flashcard[]> {
    try {
      const flashcards = await this.flashcardRepository.find();
      return flashcards

    } catch(err) {
      throw new HttpException(`Erro ao retornar os flashcards do banco de dados: ${err}`, 400)
    }
  }

  //Metodo que puxa flashcard pelo id:
  async findById(id): Promise<Flashcard> {

    const flashcard = await this.flashcardRepository.findOne({
      where: { id: id },
    });

    if (!flashcard) {
      throw new HttpException(`Flashcard de id: ${id}, não encontrado.`, 404)
    }

    return flashcard
  }

  //Metodo que puxa flashcard pelo titulo:
  async findByName(name:string): Promise<Flashcard[]> {

    const flashcards = await this.flashcardRepository.find({
      where: { title: name },
    });

    if (!flashcards) {
      throw new HttpException(`Nenhum flashcard de titulo: ${name}, foi encontrado.`, 404)
    }

    return flashcards
  }

  //Metodo que puxa flashcard pelo assunto:
  async findBySubject(subject:string): Promise<Flashcard[]> {

    const flashcards = await this.flashcardRepository.find({
      where: { subject: subject },
    });

    if (flashcards.length == 0) {
      throw new HttpException(`Nenhum flashcard de titulo: ${subject}, foi encontrado.`, 404)
    }

    return flashcards
  }

  //Metodo que puxa flashcard pela data de proxima visualização:
  async findByDate(date: string): Promise<Flashcard[]> {

    const formated_date: Date = new Date(date);

    const flashcards = await this.flashcardRepository.find({
      where: { next_review: formated_date },
    });

    if (flashcards.length == 0) {
      throw new HttpException(`Nenhum flashcard programado para: ${date}, foi encontrado.`, 404)
    }

    return flashcards
  }

  //Metodo que atualiza um flashcard pelo id:
  async update(id: number, updateFlashcardDto: UpdateFlashcardDto) {

    const result = await this.flashcardRepository.update(id, updateFlashcardDto);

    if (!result) {
      throw new HttpException(`Flashcard de id: ${id}, não encontrado.`, 404);
    } else if(result.affected === 0) {
      throw new HttpException(`Erro na hora de fazer update do flashcard`, 404);
    }

    return 'Flashcard atualizado com sucesso!'
    
  }

  //Metodo que deleta um flashcard pelo id:
  async remove(id: number) {

    const flashcard = await this.flashcardRepository.findOne({
      where: { id: id },
    });

    if (!flashcard) {
      throw new HttpException(`Flashcard de id: ${id}, não encontrado.`, 404)
    }

    this.flashcardRepository.delete(id);

    return 'Flashcard deletado com sucesso!'
    
    
  }
}
