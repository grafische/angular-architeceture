import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListMenuComponent } from './header-list-menu.component';

describe('HeaderListMenuComponent', () => {
  let component: HeaderListMenuComponent;
  let fixture: ComponentFixture<HeaderListMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderListMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
