import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BraceletsDetailsComponent } from './bracelets-details.component';

describe('BraceletsDetailsComponent', () => {
  let component: BraceletsDetailsComponent;
  let fixture: ComponentFixture<BraceletsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BraceletsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BraceletsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
