import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonListStyledComponent } from './person-list-styled.component';

describe('PersonListStyledComponent', () => {
  let component: PersonListStyledComponent;
  let fixture: ComponentFixture<PersonListStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonListStyledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonListStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
