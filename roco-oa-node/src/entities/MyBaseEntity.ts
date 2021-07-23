import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';


export abstract class MyBaseEntity extends BaseEntity {

  @CreateDateColumn({name: 'create_time'})
  createTime: Date;

  @UpdateDateColumn({name: 'update_time'})
  updateTime: Date;
}
