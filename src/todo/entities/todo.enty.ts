/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "todos" })
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
