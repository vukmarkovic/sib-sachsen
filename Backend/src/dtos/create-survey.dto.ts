import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreateSurveyDto {
  readonly data: Object;
  readonly time: string;
}
