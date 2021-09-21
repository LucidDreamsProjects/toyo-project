import { Repository } from 'typeorm';
import { Token } from '../entities/token.entity';
import { SaveTokenDto } from '../dto/save-token.dto';
export declare class TokenRepository extends Repository<Token> {
    saveToken(dto: SaveTokenDto): Promise<Token>;
    getTokenById(templateId: string, tokenId: string): Promise<Token>;
}
