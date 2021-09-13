import { Wallet } from '@arkane-network/arkane-connect';
import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'player_User' })
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  playerId?: string;

  @Column({ type: 'int' })
  index?: number;

  @Column({ type: 'varchar', length: 64 })
  username?: string;

  @Column({ type: 'varchar', length: 128 })
  email?: string;

  @Column({ type: 'varchar', length: 64 })
  firstName?: string;

  @Column({ type: 'varchar', length: 128 })
  lastName?: string;

  @Column({ type: 'text', unique: true })
  wallets?: string;

  @Column({ type: 'int', default: 3 })
  role?: number;
}
