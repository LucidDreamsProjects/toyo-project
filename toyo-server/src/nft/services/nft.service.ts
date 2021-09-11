import { CreateTemplateDto } from '../dto/create-template.dto';
import { Injectable } from '@nestjs/common';
import { MintNftDto } from '../dto/mint-nft.dto';
import { AuthService } from '../../auth/services/auth.service';
import { NFT } from '@arkane-network/arkane-connect/dist/src/models/wallet/NFT';
import { InjectRepository } from '@nestjs/typeorm';
import { TemplateRepository } from '../repositories/template.repository';
import { NftRepository } from '../repositories/nft.repository';
import axios from 'axios';
import { config } from 'dotenv';

config();

@Injectable()
export class NftService {
  // private readonly ADMIN_ID = '2f8231ca-8a79-43c9-bf21-ac8702a4e1c7';
  private readonly ADMIN_ADDRESS = '0x560fA4ccE918f9A4924218b7Ff86124C22ADFbc6';
  private readonly CONTRACT_TRANSACTION_HASH =
    '0xb679dac2e7cbe77eed47aa68caa2e9a86a35c2763140ffae6bb30935ccbc3000';
  private readonly CONTRACT_ADDRESS =
    '0x4ef2ab3c77fe8c311836db3fc4dc0b111d9667ae';
  private readonly CONTRACT_ID = 1111;
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

  public async getTemplateById(typeId: number): Promise<NFT | void> {
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
        console.log('GET TEMPLATE BY ID', response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

    return template;
  }

  private async updateTemplate(typeId: number): Promise<NFT | void> {
    const contractId = this.CONTRACT_ID;
    const url = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types/${typeId}`;
    const accessToken = await this.authService.getAccessToken();

    const template = await axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        console.log('UPDATING TEMPLATE', response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });

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
  }

  public async mintNft(
    dto: MintNftDto,
  ): Promise<Array<Record<string, string | number>> | void> {
    let i = 0;
    const nftArray = [];
    const contractId = this.CONTRACT_ID;
    const url = this.MINT_NFT_URL;
    const wallet = this.ADMIN_ADDRESS;
    const typeId = dto.typeId;
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
          contractId: contractId,
          name: nft.metadata.name,
        };

        nftArray.push(_nft);

        await this.nftRepository.saveNft(_nft);
        await this.updateTemplate(typeId);
      }
    }

    console.log(nftArray);
    return nftArray;
  }

  /* public async updateNft(dto: UpdateNftDto): Promise<Nft | void> {
    const nft = await this.nftRepository.getNftById(dto.templateId, dto.nftId);

    nft.playerId = dto.playerId;

    await this.nftRepository.save(nft);

    return nft;
  }} */

  /* private async getNfts(typeId: number): Promise<NFT[]> {
    const accessToken = await this.authService.getAccessToken();
    const url = `${process.env.NFT_API_ENDPOINT}/api/apps/${this.APPLICATION_ID}/contracts/${this.CONTRACT_ID}/token-types/${typeId}/tokens`;

    const nftArray = await axios
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

    return nftArray;
  } */

  /* public async getNftById(templateId: string, tokenId: string): Promise<Nft> {
    return await this.nftRepository.getNftById(templateId, tokenId);
  } */

  /* public async transferNft(
    @Body() dto: TransferRequestDto,
  ): Promise<SignerResult | void> {
    const url = this.TRANSFER_NFT_URL;
    const accessToken = await this.authService.getAccessToken();
    const nft = await this.getNftById(dto.templateId, dto.tokenId);
    const value = nft.value;

    const _dto = {
      tokenId: dto.tokenId,
      tokenAddress: dto.tokenAddress,
      type: 'NFT_TRANSFER',
      walletId: dto.walletId[0],
      to: dto.to,
      secretType: 'MATIC',
      value: value,
    };

    const signerResult = await axios
      .post(
        url,
        {
          transactionRequest: _dto,
          pincode: dto.pincode,
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
  } */
}
