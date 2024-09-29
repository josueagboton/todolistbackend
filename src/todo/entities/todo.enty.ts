/* eslint-disable prettier/prettier */
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  content: string;

  @Column({ default: false })
  done: boolean;

  @Column({ default: false })
  editMode: boolean;
}
