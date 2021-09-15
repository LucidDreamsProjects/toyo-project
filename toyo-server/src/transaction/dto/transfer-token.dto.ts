import { IsString, IsNumber } from 'class-validator';

export class TransferTokenDto {
  // 'NFT_TRANSFER'
  @IsString()
  type!: string;

  // Id of the wallet that will initiate the tx
  @IsString()
  walletId!: string;

  // Destination Address (can be a blockchain address or email address)
  @IsString()
  to!: string;

  // On which blockchain the tx will be executed
  @IsString()
  secretType!: string;

  // NFT Token contract address
  @IsString()
  tokenAddress!: string;

  // NFT Token ID
  @IsNumber()
  tokenId!: string;

  // Amount you want to transfer
  @IsNumber()
  value!: number;
}
