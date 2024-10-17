import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { MoodService } from './mood.service';
import { Mood } from './mood.entity';
import { CreateMoodDto } from './dto/create-mood.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';  // Uncomment when you implement authentication

@Controller('mood')
// @UseGuards(JwtAuthGuard)  // Uncomment when you implement authentication
export class MoodController {
  constructor(private readonly moodService: MoodService) {}

  @Post()
  async create(@Body() createMoodDto: CreateMoodDto): Promise<Mood> {
    return this.moodService.create(createMoodDto);
  }

  @Get(':userId')
  async findAll(@Param('userId') userId: number): Promise<Mood[]> {
    return this.moodService.findAll(userId);
  }

  @Get('single/:id')
  async findOne(@Param('id') id: number): Promise<Mood> {
    return this.moodService.findOne(id);
  }
}
