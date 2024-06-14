import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Person, PersonAstronaut,PersonService } from '../Astronaut-Service/person.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { DutyRecordReturn, AstronautDuties } from '../models/Duties';
@Component({
  selector: 'app-astronaut-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,MatTableModule,MatSortModule   ],
  templateUrl: './astronaut-list.component.html',
  styleUrl: './astronaut-list.component.css'
})
export class AstronautListComponent implements OnInit {
  astronauts: PersonAstronaut = new PersonAstronaut;
  people: Person[]= [];
  selectedDuties: AstronautDuties[]=[];
  selectedPersonData :DutyRecordReturn = new DutyRecordReturn;
  selectedPersonName:string='';
  constructor(private personService: PersonService) { }
  displayedColumns: string[] = ['name', 'currentRank', 'currentDutyTitle', 'careerStartDate', 'careerEndDate'];
  displayeddutyColumns: string[] = ['rank', 'dutyTitle', 'dutyStartDate', 'dutyEndDate'];
  dataSource = new MatTableDataSource<Person>();
 // @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.loadAstronauts();
  }
  loadAstronauts(): void {
    console.log("getting data");
    this.personService.getPersons().subscribe({
      next: (data) => {
        console.log("gotdata");
        console.log(data);
        this.dataSource.data = data.people;
        this.people = data.people;
        //this.people.sort = this.sort;
        console.log(this.people);
      },
      error: (error) => {
        console.error('Failed to load astronaut data:', error);
      }
    });
  }
  onRowClicked(astronaut: Person): void {
    console.log(astronaut);
    console.log(astronaut.name);
    this.personService.getPersonDutyRecord(astronaut.name).subscribe(details => {
      this.selectedDuties=details.astronautDuties;

      this.selectedPersonName=details.person.name;
    });
  
  }
}
