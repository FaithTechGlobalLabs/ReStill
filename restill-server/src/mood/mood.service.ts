import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mood } from './mood.entity';
import { CreateMoodDto } from './dto/create-mood.dto';

@Injectable()
export class MoodService {
  constructor(
    @InjectRepository(Mood)
    private moodRepository: Repository<Mood>,
  ) {}

  async create(createMoodDto: CreateMoodDto): Promise<Mood> {
    const mood = this.moodRepository.create(createMoodDto);
    return this.moodRepository.save(mood);
  }

  async findAll(userId: number): Promise<Mood[]> {
    return this.moodRepository.find({
      where: { userId },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Mood> {
    return this.moodRepository.findOne({ where: { id } });
  }
}
