import { Injectable } from '@angular/core';
import { IPerson } from '../interfaces/iperson';
import { Observable, of } from 'rxjs';

const persons: IPerson[] = [
  { id: 1, title: "Mr", forename: "Barney", surname: "McGrew", jobTitle: "Fireman", town: "Trumpton" },
  { id: 2, title: "Mr", forename: "Windy", surname: "Miller", jobTitle: "Miller", town: "Camberwick Green" },
  { id: 3, title: "Mr", forename: "Chippy", surname: "Minton", jobTitle: "Carpenter", town: "Trumpton" },
  { id: 4, title: "Mrs", forename: "Dora", surname: "Minton", jobTitle: "Housewife", town: "Trumpton" },
  { id: 5, title: "Mstr", forename: "Nibs", surname: "Minton", jobTitle: "Apprentice", town: "Trumpton" },
  { id: 6, title: "Mr", forename: "Nick", surname: "Fisher", jobTitle: "Bill sticker", town: "Trumpton" },
  { id: 7, title: "Mr", forename: "Jonathon", surname: "Bell", jobTitle: "Farmer", town: "Camberwick Green" },
  { id: 8, title: "Mr", forename: "Mickey", surname: "Murphy", jobTitle: "Baker", town: "Camberwick Green" },
  { id: 9, title: "Mr", forename: "Peter", surname: "Hazell", jobTitle: "Postman", town: "Camberwick Green" },
  { id: 10, title: "Mr", forename: "Thomas", surname: "Tripp", jobTitle: "Milkman", town: "Camberwick Green" }
];

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  
  getPeople(): Observable<IPerson[]> {
    const people = persons.sort((a, b) => {
      if (a.surname < b.surname) return -1;
      if (a.surname > b.surname) return 1;
      return a.forename.localeCompare(b.forename);
    }); // sort by surname then forename
    return of(people);
  }
  
  getPerson(id: number): Observable<IPerson | undefined> {
    const thisPerson = persons.find(p => p.id === id);
    return of(thisPerson);
  }
}
