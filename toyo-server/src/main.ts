import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

config();

async function bootstrap() {
  const PORT = process.env.PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.init();

  await app.listen(`${process.env.PORT}`, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
  });
}

bootstrap();
