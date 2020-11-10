import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDepartmentManagerComponent } from './structure-department-manager.component';

describe('StructureDepartmentManagerComponent', () => {
  let component: StructureDepartmentManagerComponent;
  let fixture: ComponentFixture<StructureDepartmentManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDepartmentManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDepartmentManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
