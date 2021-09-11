import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as helmet from 'helmet';
import * as compression from 'compression';

config();

async function bootstrap() {
  const PORT = process.env.PORT || 8080;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(helmet());
  app.use(compression());
  app.useStaticAssets(join(__dirname, '..', '/build'));

  app.enableCors();

  app.init();

  await app.listen(`${PORT}`, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
  });
}

bootstrap();
