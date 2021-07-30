/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArkaneConnect, WindowMode } from '@arkane-network/arkane-connect';
import { Injectable } from '@nestjs/common';
import { config } from 'dotenv';

config();

@Injectable()
export class AuthService {}
