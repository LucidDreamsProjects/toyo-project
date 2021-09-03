import { IsString, IsNumber } from 'class-validator';

export class TransferNftDto {
  // NFT Token ID
  @IsNumber()
  tokenId!: string;

  // NFT Token contract address
  @IsString()
  tokenAddress!: string;

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

  // Amount you want to transfer
  value!: number;
}
