import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersModule } from './characters/characters.module';
import { RacesController } from './races/races.controller';
import { RacesModule } from './races/races.module';
import { ServiceModule } from './service/service.module';
import { ProfessionsController } from './professions/professions.controller';
import { ProfessionsModule } from './professions/professions.module';
import { KingdomsController } from './kingdoms/kingdoms.controller';
import { KingdomsModule } from './kingdoms/kingdoms.module';
import { CitiesController } from './cities/cities.controller';
import { CitiesModule } from './cities/cities.module';
import { BooksController } from './books/books.controller';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    CharactersModule,
    TypeOrmModule.forRoot(),
    RacesModule,
    ServiceModule,
    ProfessionsModule,
    KingdomsModule,
    CitiesModule,
    GamesModule,
    BooksModule
  ],
  controllers: [AppController, RacesController, ProfessionsController, KingdomsController, CitiesController, BooksController, GamesController],
  providers: [AppService],
})
export class AppModule {}
