import { Module, OnModuleInit } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AuthService } from './services/auth.service';
import { RedisCacheModule } from '../cache/redisCache.module';
import { AuthController } from './controllers/auth.controller';
import { RedisCacheService } from 'src/cache/redisCache.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 7500,
      maxRedirects: 5,
    }),
    RedisCacheModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule implements OnModuleInit {
  constructor(
    private readonly redisCacheService: RedisCacheService,
    private readonly authService: AuthService,
  ) {}

  private async getBearerToken() {
    return await this.authService.getBearerToken();
  }

  async onModuleInit() {
    const credentials = await this.getBearerToken();
    // console.log(credentials);

    const access_token = credentials.access_token;
    const refresh_token = credentials.refresh_token;
    const session_state = credentials.session_state;

    await this.redisCacheService.set('access_token', access_token);
    await this.redisCacheService.set('refresh_token', refresh_token);
    await this.redisCacheService.set('session_state', session_state);
  }
}
