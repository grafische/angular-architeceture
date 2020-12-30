import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesTableFloorComponent } from './phones-table-floor.component';

describe('PhonesTableFloorComponent', () => {
  let component: PhonesTableFloorComponent;
  let fixture: ComponentFixture<PhonesTableFloorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonesTableFloorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesTableFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
