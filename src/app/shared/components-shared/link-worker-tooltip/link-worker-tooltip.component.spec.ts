import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWorkerTooltipComponent } from './link-worker-tooltip.component';

describe('LinkWorkerTooltipComponent', () => {
  let component: LinkWorkerTooltipComponent;
  let fixture: ComponentFixture<LinkWorkerTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkWorkerTooltipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkWorkerTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
