import configuration from '../config/configuration';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PlayerModule } from './player/player.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    HttpModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          PlayerModule,
          autoLoadEntities: true,
        }),
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
