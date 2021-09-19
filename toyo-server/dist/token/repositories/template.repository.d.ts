import { Repository } from 'typeorm';
import { Template } from '../entities/template.entity';
import { SaveTemplateDto } from '../dto/save-template.dto';
export declare class TemplateRepository extends Repository<Template> {
    saveTemplate(dto: SaveTemplateDto): Promise<Template>;
    findById(templateId: number): Promise<Template | undefined>;
}
