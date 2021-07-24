import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';
import { PlayerUserModule } from './player-user/player-user.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          PlayerUserModule,
          autoLoadEntities: true,
        }),
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
})
export class AppModule {}
