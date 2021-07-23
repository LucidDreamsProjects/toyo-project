import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PlayerUser {
  @PrimaryGeneratedColumn()
  userId!: number;

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
