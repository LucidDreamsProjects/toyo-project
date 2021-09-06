import { Repository, EntityRepository } from 'typeorm';
import { Template } from '../entities/template.entity';
import { Injectable } from '@nestjs/common';
import { SaveTemplateDto } from '../dto/save-template.dto';

@Injectable()
@EntityRepository(Template)
export class TemplateRepository extends Repository<Template> {
  public async saveTemplate(dto: SaveTemplateDto): Promise<Template> {
    // console.log('repository: ', dto);
    const { templateId, contractId, name } = dto;

    const template = new Template();
    template.templateId = templateId;
    template.contractId = contractId;
    template.name = name;

    console.log('template: ', template);

    await this.save(template);
    return template;
  }

  public async findById(templateId: number): Promise<Template | undefined> {
    const template = await this.findOne(templateId);

    if (template) {
      console.log(template);
    }

    return template;
  }
}
