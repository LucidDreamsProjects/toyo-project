import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'template_Token' })
export class Token extends BaseEntity {
  @PrimaryGeneratedColumn()
  tokenId?: number;

  @Column({ type: 'int' })
  templateId?: number;

  @Column({ type: 'int' })
  contractId?: number;

  @Column({ type: 'varchar', length: 64 })
  name?: string;

  @Column({ type: 'tinyint' })
  fungible?: boolean;
}
