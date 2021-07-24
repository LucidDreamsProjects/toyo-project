import { Injectable } from '@nestjs/common';
import { ArkaneConnect } from '@arkane-network/arkane-connect';

@Injectable()
export class AppService {
  getArkaneConnection(): void {
    const arkaneConnect = new ArkaneConnect('Testaccount');
    console.log(arkaneConnect);
  }
}
