import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerModule } from './player/player.module';
import { AppController } from './app.controller';
import { Contract } from './contract/entities/contract.entity';
import { Template } from './token/entities/template.entity';
import { Player } from './player/entities/player.entity';
import { Token } from './token/entities/token.entity';
import { AuthModule } from './auth/auth.module';
import { ContractModule } from './contract/contract.module';
import { TokenModule } from './token/token.module';
import { config } from 'dotenv';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '162.240.6.22',
      port: 3306,
      username: `toyoverse`,
      password: `=N3Z8L4V6+SE`,
      database: `toyovers_universe`,
      entities: [Player, Token, Template, Contract],
      logging: false,
      synchronize: false,
      keepConnectionAlive: true,
    }),
    AuthModule,
    PlayerModule,
    ContractModule,
    TokenModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
