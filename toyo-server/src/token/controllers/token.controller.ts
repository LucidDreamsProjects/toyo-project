import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { Body, Controller, Post, HttpCode, Param, Get } from '@nestjs/common';
import { TokenService } from '../services/token.service';
import { MintTokenDto } from '../dto/mint-token.dto';

@Controller('template')
export class TokenController {
  constructor(private readonly tokenService: TokenService) {}

  @HttpCode(200)
  @Post('token')
  public async mintToken(
    @Body() dto: MintTokenDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    return await this.tokenService.mintToken(dto);
  }
}
