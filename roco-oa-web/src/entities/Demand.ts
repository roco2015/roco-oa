import { BaseEntity } from './BaseEntity';
import { DemandPeople } from './DemandPeople';

export class Demand extends BaseEntity {
  demandId: number;

  demandName: string;

  wikiUrl: string;

  demandPeople: DemandPeople[];
}
