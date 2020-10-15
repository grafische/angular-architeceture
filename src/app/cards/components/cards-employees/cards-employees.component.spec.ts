import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsEmployeesComponent } from './cards-employees.component';

describe('CardsEmployeesComponent', () => {
  let component: CardsEmployeesComponent;
  let fixture: ComponentFixture<CardsEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
