import { Controller, Get, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getArkaneConnection(): void {
    console.log('✔️ yep, hit app controller (getArkaneConnection)...');
    return this.appService.getArkaneConnection();
  }

  @Put()
  refreshAccessToken(): void {
    console.log('✔️ yep, hit app controller (refreshAccessToken)...');
    return this.appService.refreshAcessToken();
  }
}
