import { Repository, EntityRepository, getConnection } from 'typeorm';
import { Token } from '../entities/token.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { SaveTokenDto } from '../dto/save-token.dto';

@Injectable()
@EntityRepository(Token)
export class TokenRepository extends Repository<Token> {
  public async saveToken(dto: SaveTokenDto): Promise<Token> {
    const { tokenId, templateId, contractId, name, fungible } = dto;

    const token = new Token();
    token.tokenId = tokenId;
    token.templateId = templateId;
    token.contractId = contractId;
    token.name = name;
    token.fungible = fungible;

    // console.log(token);
    await this.save(token);
    return token;
  }

  public async getTokenById(
    templateId: string,
    tokenId: string,
  ): Promise<Token> {
    const token = await getConnection()
      .createQueryBuilder()
      .select('template_Token')
      .from(Token, 'template_Token')
      .where('template_Token.tokenId = :tokenId', { tokenId: tokenId })
      .andWhere('template_Token.templateId = :templateId', {
        templateId: templateId,
      })
      .getOne();

    if (!token) {
      throw new NotFoundException(`token not found`);
    }

    return token;
  }
}
