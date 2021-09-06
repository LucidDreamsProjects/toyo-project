import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'base_Template' })
export class Template extends BaseEntity {
  @PrimaryGeneratedColumn()
  templateId?: number;

  @Column({ type: 'int' })
  contractId?: number;

  @Column({ type: 'varchar', length: 64 })
  name?: string;
}
