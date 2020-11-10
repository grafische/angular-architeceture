import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureWorkerComponent } from './structure-worker.component';

describe('StructureWorkerComponent', () => {
  let component: StructureWorkerComponent;
  let fixture: ComponentFixture<StructureWorkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureWorkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
