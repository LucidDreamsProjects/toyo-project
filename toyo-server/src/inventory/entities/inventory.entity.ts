import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'player_Inventory' })
export class Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  inventoryId?: number;

  @Column()
  items?: string;

  @Column()
  accessories?: string;

  @Column()
  bodyParts?: string;

  @Column()
  toyos?: string;
}
