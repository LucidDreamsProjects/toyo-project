"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateRepository = void 0;
const typeorm_1 = require("typeorm");
const template_entity_1 = require("../entities/template.entity");
const common_1 = require("@nestjs/common");
let TemplateRepository = class TemplateRepository extends typeorm_1.Repository {
    async saveTemplate(dto) {
        const { templateId, contractId, name } = dto;
        const template = new template_entity_1.Template();
        template.templateId = templateId;
        template.contractId = contractId;
        template.name = name;
        console.log('template: ', template);
        await this.save(template);
        return template;
    }
    async findById(templateId) {
        const template = await this.findOne(templateId);
        if (template) {
            console.log(template);
        }
        return template;
    }
};
TemplateRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, typeorm_1.EntityRepository)(template_entity_1.Template)
], TemplateRepository);
exports.TemplateRepository = TemplateRepository;
//# sourceMappingURL=template.repository.js.map