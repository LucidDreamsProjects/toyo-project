import { CreateNftDto } from '../dto/create-nft.dto';
import { Body, Injectable } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';
import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { InjectRepository } from '@nestjs/typeorm';
import { NftRepository } from '../repositories/nft.repository';
import { Nft } from '../entities/nft.entity';
import { SaveNftDto } from '../dto/save-nft.dto';

config();

@Injectable()
export class NftService {
  private readonly CONTRACT_ID = 807;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly CREATE_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;
  private readonly MINT_DATA_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/tokens/non-fungible`;

  constructor(
    @InjectRepository(NftRepository)
    private authService: AuthService,
    private nftRepository: NftRepository,
  ) {}

  public async createNft(@Body() dto: CreateNftDto): Promise<NFT | void> {
    const contractId = this.CONTRACT_ID;
    const url = this.CREATE_DATA_URL;
    const accessToken = await this.authService.getAccessToken();
    console.log('=================== service', dto);

    const nft = await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));

    console.log('============================ MERMÃO QUE DROGA');

    if (nft) {
      const _nft = {
        nftId: nft.id,
        contractId: contractId,
        name: nft.name,
        maxSupply: nft.maxSupply,
        currentSupply: nft.currentSupply,
      };

      console.log('================================= _NFT', _nft);

      await this.nftRepository.saveNft(_nft);
    }

    return nft;
  }

  public async mintNft(@Body() dto: MintNftDto): Promise<NFT | void> {
    const accessToken = await this.authService.getAccessToken();
    const url = this.MINT_DATA_URL;

    return await axios
      .post(url, dto, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => console.log(error));
  }
}
