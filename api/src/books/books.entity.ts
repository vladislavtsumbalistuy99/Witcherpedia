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
export class Books {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;

  @Column({ type: "varchar", length: 512 })
  title: string;

  @Column({ type: "varchar", length: 512 })
  author: string;

  @Column({ default: 0 })
  pages: number;

  @Column({ type: "varchar", length: 512 })
  galery: any;
}