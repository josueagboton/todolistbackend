/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "../entities/todo.enty";
import { Repository } from "typeorm";

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private TodoEntityRepository: Repository<TodoEntity>,
  ) {}

  findAll(): Promise<TodoEntity[]> {
    return this.TodoEntityRepository.find();
  }

  findOne(id: number): Promise<TodoEntity> {
    return this.TodoEntityRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateTodo: Partial<TodoEntity>,
  ): Promise<TodoEntity> {
    await this.TodoEntityRepository.update(id, updateTodo);
    return this.TodoEntityRepository.findOneBy({ id });
  }
  async todoIsDone(id: number): Promise<TodoEntity> {
    const todo = await this.TodoEntityRepository.findOneBy({ id });
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.done = true;
    await this.TodoEntityRepository.update(id, { done: todo.done });
    return todo;
  }

  async remove(id: number): Promise<void> {
    await this.TodoEntityRepository.delete({ id });
  }

  async create(todo: TodoEntity): Promise<TodoEntity> {
    return this.TodoEntityRepository.create(todo);
  }
}
