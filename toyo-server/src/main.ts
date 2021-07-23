import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { FastifyCookieOptions } from 'fastify-cookie';
import cookie from 'fastify-cookie';
import fastify from 'fastify';

const app = fastify();

async function bootstrap() {
  console.log(process.env.DATABASE_PORT);
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.register(require('fastify-cookie'), {
    secret: '',
    parseOptions: {},
  } as FastifyCookieOptions);
  await app.listen(`${process.env.PORT}`, 'localhost');
}
bootstrap();
