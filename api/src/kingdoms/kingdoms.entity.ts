import { IKingsDto } from './../../../shared/src/kings/kings.dto';
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
export class Kingdoms {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  name: string;

  @Column({ length: 500 })
  description: string;

  // @Column({ length: 500 })
  // king: IKingsDto;

  @Column({ default: 0 })
  population: number;

  @Column({ type: "varchar", length: 512 })
  galery: any;
}