import { Module, CacheModule, OnModuleInit } from '@nestjs/common';
import redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PlayerModule } from './player/player.module';
import { Connection } from 'typeorm';
import { Player } from './player/entities/player.entity';

const TYPEORM_PORT = Number(process.env.TYPEORM_PORT);
const TYPEORM_LOGGING = Boolean(process.env.TYPEORM_LOGGING);
const TYPEORM_SYNCHRONIZE = Boolean(process.env.TYPEORM_SYNCHRONIZE);

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
export class AppModule implements OnModuleInit {
  constructor(private connection: Connection, private appService: AppService) {}

  onModuleInit() {
    console.log('Initialization...');
    this.appService.venlyAuth();
  }
}
