import { Injectable } from '@nestjs/common';

@Injectable()
export class CharactersService {
  findAll(): string {
    return "Gerald of Rivia"
  }
}
