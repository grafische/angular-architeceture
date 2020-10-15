import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsDepartmentComponent } from './cards-department.component';

describe('CardsDepartmentComponent', () => {
  let component: CardsDepartmentComponent;
  let fixture: ComponentFixture<CardsDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
