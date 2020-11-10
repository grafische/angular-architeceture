import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureBoardComponent } from './structure-board.component';

describe('StructureBoardComponent', () => {
  let component: StructureBoardComponent;
  let fixture: ComponentFixture<StructureBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
