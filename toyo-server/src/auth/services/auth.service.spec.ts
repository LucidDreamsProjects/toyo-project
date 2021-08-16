import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Player } from '../../player/entities/player.entity';
import { AuthService } from './auth.service';
import { HttpModule, HttpService } from '@nestjs/axios';
import { from, map, of } from 'rxjs';
import { AxiosResponse } from 'axios';
import { HttpException, HttpStatus } from '@nestjs/common';

describe('AuthService', () => {
  let authService: AuthService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        HttpModule.register({
          timeout: 5000,
          maxRedirects: 5,
        }),
      ],
      providers: [AuthService],
    }).compile();

    authService = await module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  it('should request a bearer and refresh token and return that', () => {
    return authService.getBearerToken().then((data) => {
      // console.log(data);
      expect.objectContaining({
        Observable: expect.objectContaining({
          source: expect.objectContaining({
            _subribe: expect.arrayContaining([]),
          }),
          operator: expect.arrayContaining([expect.any(Function)]),
        }),
      });
    });
  });
});
