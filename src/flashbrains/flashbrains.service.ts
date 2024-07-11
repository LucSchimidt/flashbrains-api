import { Injectable } from '@nestjs/common';
import { CreateFlashbrainDto } from './dto/create-flashbrain.dto';
import { UpdateFlashbrainDto } from './dto/update-flashbrain.dto';

@Injectable()
export class FlashbrainsService {
  create(createFlashbrainDto: CreateFlashbrainDto) {
    return 'This action adds a new flashbrain';
  }

  findAll() {
    return `This action returns all flashbrains`;
  }

  findOne(id: number) {
    return `This action returns a #${id} flashbrain`;
  }

  update(id: number, updateFlashbrainDto: UpdateFlashbrainDto) {
    return `This action updates a #${id} flashbrain`;
  }

  remove(id: number) {
    return `This action removes a #${id} flashbrain`;
  }
}
