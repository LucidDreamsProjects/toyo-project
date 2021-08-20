import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'player_User' })
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  playerID!: string;

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

  @Column({ type: 'int' })
  icon?: number;

  @Column({ type: 'varchar', length: 128 })
  address?: string;

  @Column({ type: 'uuid' })
  inventory?: string;

  @Column({ type: 'varchar', length: 512 })
  replays?: string;

  @Column({ type: 'varchar', unique: true, length: 256 })
  walletAddress!: string;

  @Column({ type: 'int', default: 3 })
  role!: number;

  @Column({ type: 'varchar' })
  refreshToken?: string;
}
