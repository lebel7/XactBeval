import { Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
// import { PersonListStyledComponent } from './components/person-list-styled/person-list-styled.component';
// import { PersonDetailsStyledComponent } from './components/person-details-styled/person-details-styled.component';

export const routes: Routes = [
    {path: 'people', component: PersonListComponent},
    {path: 'person/:id', component: PersonDetailsComponent}
];
