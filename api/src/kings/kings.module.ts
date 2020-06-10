import { Module } from '@nestjs/common';
import { KingsService } from './kings.service';

@Module({
  providers: [KingsService]
})
export class KingsModule {}
