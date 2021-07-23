import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerUsersModule } from './player-users/player-users.module';

//* "synchronize: true" shouldn't be used in production
//*  otherwise we will lose data
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    PlayerUsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
