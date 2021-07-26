import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Demand } from './Demand';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
@Index(['demandId', 'userId'])
export class DemandPeople extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  demandPeopleId: number;

  @Column({name: 'demand_id'})
  demandId: number;

  @Index()
  @Column({name: 'user_id'})
  userId: number;

  @Column({name: 'role_id'})
  roleId: number;

  @Column({name: 'demand_date', nullable: true, default: ''})
  demandDate: string;
  
  @Column({name: 'develop_date', nullable: true, default: ''})
  developDate: string;

  @Column({name: 'debug_date', nullable: true, default: ''})
  debugDate: string;

  @Column({name: 'test_date', nullable: true, default: ''})
  testDate: string;

  @Column({name: 'release_date', nullable: true, default: ''})
  releaseDate: string;

  @Column({name: 'comment', nullable: true, default: ''})
  comment: string;

  @ManyToOne(() => Demand, demand => demand.demandPeople)
  @JoinColumn({ name: 'demand_id' })
  demand: Demand;

}
