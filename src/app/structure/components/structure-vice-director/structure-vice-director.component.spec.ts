import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureViceDirectorComponent } from './structure-vice-director.component';

describe('StructureViceDirectorComponent', () => {
  let component: StructureViceDirectorComponent;
  let fixture: ComponentFixture<StructureViceDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureViceDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureViceDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
