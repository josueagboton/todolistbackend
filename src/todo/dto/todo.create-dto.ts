/* eslint-disable prettier/prettier */

import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateTodoDto {
  @IsString()
  content: string;

  @IsOptional()
  @IsBoolean()
  done: boolean;

  @IsBoolean()
  @IsOptional()
  editMode: boolean;
}
