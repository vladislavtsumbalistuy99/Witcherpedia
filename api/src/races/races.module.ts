import { Module } from '@nestjs/common';
import { RacesService } from './races.service';

@Module({
  providers: [RacesService]
})
export class RacesModule {}
