import { Module, CacheModule } from '@nestjs/common';
import redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PlayerModule } from './player/player.module';
import { Player } from './player/entities/player.entity';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    HttpModule,
    PlayerModule,
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      host: '162.240.6.22',
      port: 3306,
      username: 'wwtoyo_admin',
      password: 'dd^8A!DPq#ZpjewF2',
      database: 'wwtoyo_universe',
      entities: [Player],
      logging: true,
      synchronize: false,
    }),
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 5003,
    }),
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {
  constructor(private appService: AppService) {}

  TYPEORM_PORT = Number(process.env.TYPEORM_PORT);
  TYPEORM_LOGGING = Boolean(process.env.TYPEORM_LOGGING);
  TYPEORM_SYNCHRONIZE = Boolean(process.env.TYPEORM_SYNCHRONIZE);

  foo = () => {
    console.log(this.TYPEORM_PORT);
    console.log(this.TYPEORM_LOGGING);
    console.log(this.TYPEORM_SYNCHRONIZE);
  };
}
