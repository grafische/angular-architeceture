import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsFullComponent } from './vacations-full.component';

describe('VacationsFullComponent', () => {
  let component: VacationsFullComponent;
  let fixture: ComponentFixture<VacationsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationsFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
