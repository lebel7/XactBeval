import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { IPerson } from '../../interfaces/iperson';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-details-styled',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './person-details-styled.component.html',
  styleUrl: './person-details-styled.component.css'
})
export class PersonDetailsStyledComponent {
  people: IPerson[] = [];
  paginatedPeople: IPerson[] = [];
  pageSize = 5;
  currentPage = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe((people: IPerson[]) => {
      this.people = people;
      this.updatePaginatedPeople();
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedPeople();
  }

  updatePaginatedPeople() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedPeople = this.people.slice(startIndex, endIndex);
  }
}
