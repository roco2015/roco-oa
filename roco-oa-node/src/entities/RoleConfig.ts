import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
export class RoleConfig extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  roleId: number;

  @Column({name: 'position_name'})
  positionName: string;
}
