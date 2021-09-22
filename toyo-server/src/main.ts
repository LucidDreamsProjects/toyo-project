import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as fs from 'fs';

config();

async function bootstrap() {
  const PORT = process.env.PORT || 8081;

  /* const httpsOptions = {
    key: fs.readFileSync('./ssl/private-key.pem'),
    cert: fs.readFileSync('./ssl/public-certificate.pem'),
  }; */

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule /* , {
    httpsOptions,
  } */,
  );

  app.use(helmet());
  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', '/build'));

  app.enableCors();

  app.init();

  await app.listen(`${PORT}`, () => {
    console.log(
      `⚡️ [server]: Server is running at ${process.env.BASE_PRODUCTION_URL}:${PORT}`,
    );
  });
}

bootstrap();
