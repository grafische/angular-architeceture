import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsFullDetailsComponent } from './vacations-full-details.component';

describe('VacationsFullDetailsComponent', () => {
  let component: VacationsFullDetailsComponent;
  let fixture: ComponentFixture<VacationsFullDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsFullDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsFullDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
