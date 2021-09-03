import { CreateTemplateDto } from '../dto/create-template.dto';
import { Body, Injectable, Query } from '@nestjs/common';
import axios from 'axios';
import { config } from 'dotenv';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';
import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateRepository } from '../repositories/template.repository';
import { NftRepository } from '../repositories/nft.repository';
import { TransferNftDto } from '../dto/transfer-nft.dto';
import { Param } from '@nestjs/common';
import { SignerResult } from '@arkane-network/arkane-connect';

config();

@Injectable()
export class NftService {
  private readonly ADMIN_ID = '2f8231ca-8a79-43c9-bf21-ac8702a4e1c7';
  private readonly ADMIN_ADDRESS = '0x5579Ed3E4BD2ce1a0518E0309291c6487408e03c';
  private readonly CONTRACT_ID = 1078;
  private readonly APPLICATION_ID = process.env.APPLICATION_ID;
  private readonly CREATE_TEMPLATE_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;
  private readonly MINT_NFT_URL = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/tokens/non-fungible`;
  private readonly TRANSFER_NFT_URL = `${process.env.WALLET_API_ENDPOINT}/api/transactions/execute`;

  constructor(
    @InjectRepository(TemplateRepository)
    private templateRepository: TemplateRepository,
    @InjectRepository(NftRepository)
    private nftRepository: NftRepository,
    private authService: AuthService,
  ) {}

  public async createTemplate(dto: CreateTemplateDto): Promise<NFT | void> {
    const contractId = this.CONTRACT_ID;
    const url = this.CREATE_TEMPLATE_URL;
    const accessToken = await this.authService.getAccessToken();

    const template = await axios
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

    if (template) {
      const _template = {
        templateId: template.id,
        contractId: contractId,
        name: template.name,
        maxSupply: template.maxSupply,
        currentSupply: template.currentSupply,
      };

      await this.templateRepository.saveTemplate(_template);
    }

    return template;
  }

  public async getTemplates(): Promise<NFT[] | void> {
    const accessToken = await this.authService.getAccessToken();
    const url = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types`;

    const templates = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return templates;
  }

  public async getTemplate(typeId: number): Promise<NFT | void> {
    const accessToken = await this.authService.getAccessToken();
    const url = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types/${typeId}`;
    console.log(url);

    const template = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return template;
  }

  public async mintNft(
    dto: MintNftDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    let i = 0;
    const nftArray = [];
    const url = this.MINT_NFT_URL;
    const id = this.ADMIN_ID;
    const wallet = this.ADMIN_ADDRESS;
    const typeId = dto.typeId;
    const value = dto.value;
    const quantity = dto.quantity;
    const accessToken = await this.authService.getAccessToken();
    const _dto = {
      typeId: typeId,
      destinations: [wallet],
    };

    for (i; i < quantity; ++i) {
      console.log('👷 Preparing the NFT Template to be minted');
      const nft = await axios
        .post(url, _dto, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log('👷 You minted a new NFT!');
          console.log(response.data[0]);
          return response.data[0];
        })
        .catch((error) => console.log(error));

      if (nft) {
        console.log('👷 Saving new NFT on database...');
        const _nft = {
          nftId: nft.tokenIds[0],
          templateId: typeId,
          playerId: id,
          name: nft.metadata.name,
          value: value,
        };

        nftArray.push(_nft);

        await this.nftRepository.saveNft(_nft);
      }
    }

    console.log(nftArray);
    return nftArray;
  }

  public async transferNft(
    @Param() pincode: string,
    @Body() dto: TransferNftDto,
  ): Promise<SignerResult | void> {
    const url = this.TRANSFER_NFT_URL;
    const accessToken = await this.authService.getAccessToken();

    const signerResult = await axios
      .post(
        url,
        {
          transactionRequest: dto,
          pincode: pincode,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      )
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((err) => {
        console.log(err);
      });

    return signerResult;
  }
}
