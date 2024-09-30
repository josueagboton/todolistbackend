/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { TodoService } from "../services/todo.service";
import { TodoEntity } from "../entities/todo.enty";

@Controller("todos")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAll() {
    return this.todoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.todoService.findOne(id);
  }

  @Post()
  addTodo(@Body() todo: TodoEntity) {
    return this.todoService.create(todo);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() todo: TodoEntity) {
    return this.todoService.update(id, todo);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.todoService.remove(id);
  }

  @Put("isdone/:id")
  isdone(@Param("id") id: number) {
    return this.todoService.todoIsDone(id);
  }
}
