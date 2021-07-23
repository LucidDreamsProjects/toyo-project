import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//* "synchronize: true" shouldn't be used in production
//*  otherwise we will lose data
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
    }),
    /* ConfigModule.forRoot({
      load: [configuration],
    }), */
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
