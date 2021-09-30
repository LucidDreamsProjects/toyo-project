import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'base_Contract' })
export class Contract extends BaseEntity {
  @PrimaryGeneratedColumn()
  contractId?: number;

  @Column({ type: 'varchar', length: 128 })
  name?: string;

  @Column({ type: 'varchar', length: 256 })
  description?: string;

  @Column({ type: 'varchar', length: 36 })
  chain?: string;

  @Column({ type: 'varchar', length: 8 })
  symbol?: string;

  @Column({ type: 'varchar', length: 256 })
  externalUrl?: string;
}
