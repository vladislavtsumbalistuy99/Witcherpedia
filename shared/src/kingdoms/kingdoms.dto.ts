import { IKingsDto } from './../kings/kings.dto';

export interface IKingdomsDto {
  readonly id: string,
  readonly name: string,
  readonly king: IKingsDto,
  readonly population: number,
  readonly history: string,
  readonly galery: any
}