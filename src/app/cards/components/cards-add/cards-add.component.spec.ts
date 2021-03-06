import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAddComponent } from './cards-add.component';

describe('CardsAddComponent', () => {
  let component: CardsAddComponent;
  let fixture: ComponentFixture<CardsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
