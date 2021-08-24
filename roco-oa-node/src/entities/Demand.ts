import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
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

  @Index()
  @Column({name: 'group_id', nullable: true, default: ''})
  groupId: string;

  // 10 未评审，20已评审，30开发中，40测试中，50已上线
  // 目前只有20，50在用
  @Column({name: 'status', default: 20})
  status: number;

  @Column({name: 'create_date', nullable: true, default: ''})
  createDate: string;

  @Column({name: 'review_date', nullable: true, default: ''})
  reviewDate: string;

  @Column({name: 'plan_online_date', nullable: true, default: ''})
  planOnlineDate: string;

  @Column({name: 'online_date', nullable: true, default: ''})
  onlineDate: string;

  @Column({name: 'comment', nullable: true, default: ''})
  comment: string;
  
  demandPeople: DemandPeople[];
}
