import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { PlayerUserModule } from './player-user/player-user.module';
import { AuthModule } from './auth/auth.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          PlayerUserModule,
          AuthModule,
          autoLoadEntities: true,
        }),
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    HttpModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
