/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "./todo/entities/todo.enty";
import { TodoController } from "./todo/controllers/todo.controller";
import { TodoService } from "./todo/services/todo.service";
// import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
  // imports: [
  //   ConfigModule.forRoot(),
  //   TypeOrmModule.forRootAsync({
  //     imports: [ConfigModule],
  //     useFactory: (configService: ConfigService) => ({
  //       type: "mysql",
  //       host: configService.get("DB_HOST"),
  //       port: +configService.get("DB_PORT"),
  //       username: configService.get("DB_USERNAME"),
  //       password: configService.get("DB_PASSWORD"),
  //       database: configService.get("DB_NAME"),
  //       entities: [TodoEntity],
  //       synchronize: true,
  //     }),
  //     inject: [ConfigService],
  //   }),
  //   TypeOrmModule.forFeature([TodoEntity]),
  // ],
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "todo_db",
      autoLoadEntities: true,
      synchronize: true,
      entities: [TodoEntity],
    }),
    TypeOrmModule.forFeature([TodoEntity]),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
