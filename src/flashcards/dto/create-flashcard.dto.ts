import { IsString, IsArray, ArrayNotEmpty, IsNotEmpty, IsNumber, IsDate, isString } from 'class-validator';
import { IsISODateString } from 'src/common/decorators/is-iso-date-string';

export class CreateFlashcardDto {

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  subject: string;

  @IsNumber()
  flashcard_reviews: number;

  @IsString()
  @IsISODateString()
  next_review: Date;

  @IsString()
  @IsISODateString()
  created_at: Date;

  @IsString()
  content: string;
}
