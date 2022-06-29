import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarringsDetailsComponent } from './earrings-details.component';

describe('EarringsDetailsComponent', () => {
  let component: EarringsDetailsComponent;
  let fixture: ComponentFixture<EarringsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarringsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarringsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
