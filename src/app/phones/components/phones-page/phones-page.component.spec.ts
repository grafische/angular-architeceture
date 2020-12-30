import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonesPageComponent } from './phones-page.component';

describe('PhonesPageComponent', () => {
  let component: PhonesPageComponent;
  let fixture: ComponentFixture<PhonesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhonesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
