import { PartialType } from '@nestjs/mapped-types';
import { CreateFlashbrainDto } from './create-flashbrain.dto';

export class UpdateFlashbrainDto extends PartialType(CreateFlashbrainDto) {}
