import { Module, CacheModule, OnModuleInit } from '@nestjs/common';
import redisStore from 'cache-manager-redis-store';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PlayerModule } from './player/player.module';
import { Player } from './player/entities/player.entity';
import { AuthModule } from './auth/auth.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    PlayerModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql' as any,
      host: '162.240.6.22',
      port: 3306,
      username: 'wwtoyo_admin',
      password: 'dd^8A!DPq#ZpjewF2',
      database: 'wwtoyo_universe',
      entities: [Player],
      logging: ['error'],
      maxQueryExecutionTime: 1000,
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
  onModuleInit() {
    console.log('The module has been initialized.');
  }
}
