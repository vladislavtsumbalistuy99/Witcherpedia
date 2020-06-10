import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { Characters } from 'src/characters/characters.entity';

@Entity()
export class Races {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @ManyToOne(
    () => Characters,
    character => character.races,
  )
  characters: Characters[]
}