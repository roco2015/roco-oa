import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { MyBaseEntity } from './MyBaseEntity';

@Entity()
export class User extends MyBaseEntity {

  @PrimaryGeneratedColumn({name: 'id'})
  userId: number;

  @Column({name: 'user_name'})
  userName: string;

  @Column({name: 'dingtalk_id', unique: true})
  dingtalkId: string;
}
