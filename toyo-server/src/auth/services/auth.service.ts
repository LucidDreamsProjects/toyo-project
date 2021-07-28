/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  googleLogin(req: any) {
    if (!req.user) {
      return 'No user from google';
    }

    const payload = {
      message: 'User info from Google',
      user: req.user,
    };

    console.log(payload);

    return {
      message: 'User info from Google',
      user: req.user,
    };
  }
}
