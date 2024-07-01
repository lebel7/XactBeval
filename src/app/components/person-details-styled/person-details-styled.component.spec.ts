import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsStyledComponent } from './person-details-styled.component';

describe('PersonDetailsStyledComponent', () => {
  let component: PersonDetailsStyledComponent;
  let fixture: ComponentFixture<PersonDetailsStyledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonDetailsStyledComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonDetailsStyledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
