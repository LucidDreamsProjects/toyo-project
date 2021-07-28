/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  venlyLogin(req: any) {
    if (!req.user) {
      return 'No user from Venly';
    }

    const payload = {
      message: 'User info from Google',
      user: req.user,
    };

    console.log(payload);

    return {
      message: 'User info from Venly',
      user: req.user,
    };
  }

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
