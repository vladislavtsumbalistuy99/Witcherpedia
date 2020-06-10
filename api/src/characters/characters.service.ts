import { Characters } from 'src/characters/characters.entity';
import { Repository, createConnection } from 'typeorm';
import { Injectable, NotFoundException, OnModuleInit, InternalServerErrorException, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CharactersService {
  constructor(@InjectRepository(Characters) private readonly charactersRepository:
  Repository<Characters>) { }
  async findAll(): Promise<any> {
    return await this.charactersRepository.find()
  }
  async test(): Promise<any> {
    return await this.charactersRepository.find()
  }
}
