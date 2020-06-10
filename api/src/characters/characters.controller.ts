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
  getAll(): any {
    return this.CharactersService.findAll()
  }

  @Get("/test")
  test(): any {
    return 'ddd'
    //return this.CharactersService.test()
  }
}
