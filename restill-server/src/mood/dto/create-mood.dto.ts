import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateMoodDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  moodLevel: string;
}
