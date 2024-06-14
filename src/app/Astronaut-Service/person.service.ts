import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AstronautDuties,DutyRecordReturn } from '../models/Duties';

export class PersonAstronaut {
  success: boolean = false;
  message:  string = '';
  responseCode: number = 0;
  people: Person[] = []; 
}
export class Person{
  personid: number = 0;;
  name: string = '';
  currentRank: string = '';
  currentDutyTitle: string = '';
  careerStartDate?: Date;
  careerEndDate?: Date;
}
@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiPersonListUrl = 'https://localhost:7204/Person';
  private AstronautDuty = 'https://localhost:7204/AstronautDuty';
  constructor(private http: HttpClient) { }
   
  getPersons(): Observable<PersonAstronaut> {
    return this.http.get<PersonAstronaut>(this.apiPersonListUrl);
  }

  getPersonDutyRecord(name: string): Observable<DutyRecordReturn> {
    return this.http.get<DutyRecordReturn>(this.AstronautDuty+'/'+name);
  }
}