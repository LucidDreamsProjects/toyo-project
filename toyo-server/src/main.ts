/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as session from 'express-session';

config();

async function bootstrap() {
  const PORT = process.env.PORT;
  const SESSION_SECRET = process.env.SESSION_SECRET;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.use(
    session({
      secret: `${process.env.SESSION_SECRET}`,
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 3600000, httpOnly: true },
    }),
  );

  await app.listen(`${process.env.PORT}`, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}
bootstrap();
