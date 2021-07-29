import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Index } from 'typeorm';
import { Demand } from './Demand';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
@Index(['demandId', 'userId'])
export class DemandPeople extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  demandDeveloperId: number;

  @Column({name: 'demand_id'})
  demandId: number;

  @Index()
  @Column({name: 'user_id'})
  userId: number;

  userName: string;

  @Column({name: 'role_id'})
  roleId: number;

  roleName: string;

  @Column({name: 'develop_date', nullable: true, default: ''})
  developDate: string;

  @Column({name: 'debug_date', nullable: true, default: ''})
  debugDate: string;

  @Column({name: 'submit_test_date', nullable: true, default: ''})
  submitTestDate: string;

  @Column({name: 'start_test_date', nullable: true, default: ''})
  startTestDate: string;

  @Column({name: 'finish_test_date', nullable: true, default: ''})
  finishTestDate: string;

  @Column({name: 'comment', nullable: true, default: ''})
  comment: string;

  @ManyToOne(() => Demand, demand => demand.demandPeople)
  @JoinColumn({ name: 'demand_id' })
  demand: Demand;

}
