/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppService } from './app.service';
import * as session from 'express-session';
import axios from 'axios';
import qs from 'qs';

config();

async function bootstrap() {
  const PORT = process.env.PORT;
  const SESSION_SECRET = process.env.SESSION_SECRET;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.use(
    session({
      secret: `${SESSION_SECRET}`,
      resave: true,
      saveUninitialized: false,
      cookie: { maxAge: 3600000, httpOnly: true },
    }),
  );

  app.init();

  await app.listen(`${process.env.PORT}`, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

bootstrap();
