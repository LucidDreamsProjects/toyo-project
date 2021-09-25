import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/services/auth.service';
import { TemplateController } from './controllers/template.controller';
import { TemplateService } from './services/template.service';
import { TemplateRepository } from './repositories/template.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TemplateRepository]),
    HttpModule.register({
      timeout: 15000,
      maxRedirects: 5,
    }),
  ],
  controllers: [TemplateController],
  providers: [TemplateService, AuthService],
  exports: [TemplateService],
})
export class TemplateModule {}
