import { Characters } from 'src/characters/characters.entity';
import { Kingdoms } from './../kingdoms/kingdoms.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Kings {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  history: string;

  @Column({ type: "varchar", length: 512 })
  galery: any;

  @ManyToMany(
    () => Kingdoms,
    kingdom => kingdom.kings,
  )
  kingdoms: Kingdoms[]

  @ManyToOne(
    () => Characters,
    character => character.kings,
    { onDelete: "CASCADE", eager: true },
  )
  characters: Characters
}