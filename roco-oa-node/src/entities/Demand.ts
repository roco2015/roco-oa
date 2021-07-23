import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { DemandPeople } from './DemandPeople';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
export class Demand extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  demandId: number;

  @Column({name: 'demand_name', nullable: true, default: ''})
  demandName: string;

  @Column({name: 'wiki_url', nullable: true, default: ''})
  wikiUrl: string;

  @OneToMany(() => DemandPeople, demandPeople => demandPeople.demand)
  demandPeople: DemandPeople[];
}
