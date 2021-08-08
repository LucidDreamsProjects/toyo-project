import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'base_Toyo' })
export class Toyo extends BaseEntity {
  @PrimaryGeneratedColumn()
  toyoId?: number;

  @Column()
  inventoryId?: number;

  @Column()
  token?: string;

  @Column()
  name?: string;

  @Column()
  baseStats?: string;

  @Column()
  finalStats?: string;

  //? whats this
  @Column()
  basics?: string;

  @Column()
  body?: string;

  @Column()
  accessories?: string;

  @Column()
  single?: string;

  @Column()
  doubles?: string;

  @Column()
  triples?: string;

  @Column()
  tournaments?: string;

  @Column()
  condition?: number;

  @Column()
  skills?: string;

  @Column()
  owners?: string;

  @Column()
  cloned?: number;
}
