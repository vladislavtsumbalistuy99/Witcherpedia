import { IProfessionssDto } from './../professions/professions.dto';
import { IGamesDto } from './../games/games.dto';
import { IBooksDto } from './../books/books.dto';
import { IKingdomsDto } from './../kingdoms/kingdoms.dto';
import { IRaceDto } from './../races/races.dto';

export interface ICharacterDto {
  readonly id: string,
  readonly name: string,
  readonly description: string,
  readonly race: IRaceDto,
  readonly profession: IProfessionssDto,
  readonly region: IKingdomsDto,
  readonly book: IBooksDto,
  readonly game: IGamesDto,
  readonly galery: any
}