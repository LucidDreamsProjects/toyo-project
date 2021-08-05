import { Inject } from '@nestjs/common';
import { Controller, Post, CACHE_MANAGER } from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager';
import { AxiosResponse } from '@nestjs/common/node_modules/axios';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
