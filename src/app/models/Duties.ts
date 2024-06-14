import { PersonAstronaut } from "./person-astronaut.model";

    export class AstronautDuties{
        id:number;
        personId: number;
        rank: string;
        dutyTitle: string;
        dutyStartDate?: Date;  
        dutyEndDate?: Date;   
        constructor(
            personId: number=0,
            rank: string='',
            id: number=0,
            dutyTitle: string='',
            dutyStartDate?: Date,
            dutyEndDate?: Date
          ) {
            this.id= id;
            this.personId = personId;
            this.rank = rank;
            this.dutyTitle = dutyTitle;
            this.dutyStartDate = dutyStartDate;
            this.dutyEndDate = dutyEndDate;
          }
    }

    export class DutyRecordReturn{
      person:PersonAstronaut = new PersonAstronaut();
      astronautDuties:AstronautDuties[] =[];
    }