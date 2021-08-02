import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
export class Role extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  roleId: number;

  @Column({name: 'position_name'})
  positionName: string;
}
