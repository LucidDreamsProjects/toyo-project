import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
<<<<<<< Updated upstream
  getArkaneConnection(): void {
=======
  private getArkaneConnection(): void {
    console.log('✔️ yep, hit app controller (getArkaneConnection)...');
>>>>>>> Stashed changes
    return this.appService.getArkaneConnection();
  }
}
