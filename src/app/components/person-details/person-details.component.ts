import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person.service';
import { IPerson } from '../../interfaces/iperson';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  person: IPerson | undefined;

  constructor(private route: ActivatedRoute, private personService: PersonService) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      takeUntil(this.destroy$),
      switchMap(params => {
        const id = +params.get('id')!;
        return this.personService.getPerson(id);
      })
    ).subscribe(person => {
      this.person = person;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
