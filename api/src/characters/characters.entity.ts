import { Kings } from './../kings/kings.entity';
import { Kingdoms } from './../kingdoms/kingdoms.entity';
import { Professions } from './../professions/professions.entity';
import { Races } from './../races/races.entity';

import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Characters {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  descriptions: string;

  @OneToMany(
    () => Races,
    race => race.characters,
  )
  @JoinColumn()
  races: Races[]

  @OneToMany(
    () => Professions,
    profession => profession.characters,
    { eager: true},
  )
  @JoinColumn()
  professions: Professions[]

  @OneToMany(
    () => Kingdoms,
    kingdoms => kingdoms.characters,
  )
  @JoinColumn()
  kingdoms: Kingdoms[]

  @OneToMany(
    () => Kings,
    king => king.characters,
  )
  @JoinColumn()
  kings: Kings[]
}
