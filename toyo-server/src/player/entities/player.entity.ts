import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PlayerRepository')
export class PlayerRepository {
  @PrimaryGeneratedColumn()
  playerId!: number;

  @Column()
  wallet!: string;

  @Column()
  username!: string;

  @Column()
  tag!: number;

  @Column()
  name!: string;

  @Column()
  icon!: number;

  @Column()
  address!: string;

  @Column()
  replays!: string;

  @Column()
  role!: number;
}
