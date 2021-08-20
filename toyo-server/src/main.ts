/* eslint-disable @typescript-eslint/no-var-requires */
import { config } from 'dotenv';
// import redis from 'redis';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthService } from './auth/services/auth.service';
// import { Request, Response, NextFunction } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

config();

async function bootstrap() {
  let authService: AuthService;
  const PORT = process.env.PORT;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  /* const client = redis.createClient(6379);

  client.on('error', (error) => {
    console.log(error);
  }); */

  app.enableCors();

  /* function aMiddleware(req: Request, res: Response, next: NextFunction) {
    next();
  }

  app.get('/auth/validate', (aMiddleware) => {
    try {
      client.get('access_token', async (err, token) => {
        if (token) {
          return res.status(200).send({
            error: false,
            message: `access token received from the cache`,
            data: token,
          });
        } else {
          const credentials = await authService.getBearerToken();

          client.set('access_token', credentials.data.access_token);

          return res.status(200).send({
            error: false,
            message: `access token received from the cache`,
            data: credentials.data.access_token,
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  }); */

  app.init();

  await app.listen(`${process.env.PORT}`, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
}

bootstrap();
