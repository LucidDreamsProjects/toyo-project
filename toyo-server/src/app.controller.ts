import { Controller, Get } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

@Controller('authorize')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('widget')
  public async authWidget(): Promise<
    Observable<AxiosResponse<void>> | undefined
  > {
    console.log('👷 Initializing (NestJS) Widget API controller...');
    const authenticatedUser = await this.appService.authWidget();
    return authenticatedUser;
  }

  @Get('postman')
  public async authPostman(): Promise<void> {
    console.log('👷 Initializing (NestJS) Postman controller...');
    const authenticatedUser = await this.appService.authPostman();
    return authenticatedUser;
  }
}
