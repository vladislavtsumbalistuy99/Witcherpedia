import { Characters } from 'src/characters/characters.entity';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Professions {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ type: "varchar", length: 512 })
  galery: any;

  @ManyToOne(
    () => Characters,
    characters => characters.professions,
    { onDelete: "CASCADE" }
  )
  characters: Characters
}