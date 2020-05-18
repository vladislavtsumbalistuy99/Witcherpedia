import { Module } from '@nestjs/common';
import { KingdomsService } from './kingdoms.service';

@Module({
  providers: [KingdomsService]
})
export class KingdomsModule {}
