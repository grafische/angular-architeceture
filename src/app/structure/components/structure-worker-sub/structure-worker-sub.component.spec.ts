import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureWorkerSubComponent } from './structure-worker-sub.component';

describe('StructureWorkerSubComponent', () => {
  let component: StructureWorkerSubComponent;
  let fixture: ComponentFixture<StructureWorkerSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructureWorkerSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructureWorkerSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
