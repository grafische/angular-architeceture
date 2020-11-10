import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectorComponent } from './structure-director.component';

describe('StructureDirectorComponent', () => {
  let component: StructureDirectorComponent;
  let fixture: ComponentFixture<StructureDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
