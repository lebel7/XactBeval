import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { IPerson } from '../../interfaces/iperson';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-list-styled',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule],
  templateUrl: './person-list-styled.component.html',
  styleUrl: './person-list-styled.component.css'
})
export class PersonListStyledComponent implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'jobTitle', 'town'];
  dataSource: MatTableDataSource<IPerson> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getPeople().subscribe((people: IPerson[]) => {
      this.dataSource = new MatTableDataSource(people);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
