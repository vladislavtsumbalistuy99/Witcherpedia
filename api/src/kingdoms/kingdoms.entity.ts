import { Characters } from 'src/characters/characters.entity';
import { Kings } from './../kings/kings.entity';
import { IKingsDto } from './../../../shared/src/kings/kings.dto';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Kingdoms {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ default: 0 })
  population: number;

  @Column({ type: "varchar", length: 512 })
  galery: any;

  @ManyToMany(
    () => Kings,
    king => king.kingdoms,
  )
  @JoinTable()
  kings: Kings[]

  @ManyToOne(
    () => Characters,
    character => character.kingdoms,
  )
  characters: Characters
}