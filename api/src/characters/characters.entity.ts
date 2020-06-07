import { IKingdomsDto } from './../../../shared/src/kingdoms/kingdoms.dto';
import { IProfessionssDto } from './../../../shared/src/professions/professions.dto';
import { IRaceDto } from './../../../shared/src/races/races.dto';
import {
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
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
  description: string;

  // @Column({ length: 500 })
  // race: IRaceDto;

  // @Column({ length: 500 })
  // profession: IProfessionssDto;

  // @Column({ length: 500 })
  // region: IKingdomsDto

  
}
