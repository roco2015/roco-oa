import { BaseEntity } from './BaseEntity';

export class DemandPeople extends BaseEntity {
  demandPeopleId: number;

  demandId: number;

  userId: number;

  roleId: number;

  demandDate: string;

  developDate: string;

  debugDate: string;

  testDate: string;

  releaseDate: string;

  comment: string;
}
