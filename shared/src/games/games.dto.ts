export interface IGamesDto {
  readonly id: string,
  readonly name: string,
  readonly descriptions: string,
  readonly platforms: string,
  readonly releaseDate: Date,
  readonly publisher: string,
  readonly website: string,
}