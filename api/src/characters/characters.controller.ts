import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { Characters } from './characters.entity';

@Controller('characters')
export class CharactersController {
  constructor(private readonly CharactersService: CharactersService) { }

  @Get()
  getAll(): string {
    return this.CharactersService.findAll()
  }
}
