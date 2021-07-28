import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthHttpModule } from './auth-http.module';

@Module({
  imports: [AuthHttpModule, PassportModule],
})
export class AuthModule {}
