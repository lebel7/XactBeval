import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';
import { Subject, map, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  people: { id: number, fullName: string }[] = [];
  paginatedPeople: { id: number, fullName: string }[] = [];
  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;

  constructor(private personService: PersonService, private router: Router) {}

  ngOnInit(): void {
    this.personService.getPeople().pipe(
      takeUntil(this.destroy$),
      map(iPeople => iPeople.map(person => ({
        id: person.id,
        fullName: `${person.title} ${person.forename} ${person.surname}`
      })))
    ).subscribe((mPeople) => {
      this.people = mPeople;
      this.totalPages = Math.ceil(this.people.length / this.pageSize);
      this.updatePaginatedPeople();
    });
  }

  updatePaginatedPeople(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedPeople = this.people.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedPeople();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedPeople();
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/person', id]);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
