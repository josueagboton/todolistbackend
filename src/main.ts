/* eslint-disable prettier/prettier */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Activer CORS
  app.enableCors({
    origin: "http://localhost:5173", // Autoriser l'origine spécifique de votre front-end
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Méthodes HTTP autorisées
    credentials: true, // Activer l'envoi des cookies si nécessaire
  });
  await app.listen(3000);
}
bootstrap();
