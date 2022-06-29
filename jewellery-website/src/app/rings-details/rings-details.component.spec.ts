import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingsDetailsComponent } from './rings-details.component';

describe('RingsDetailsComponent', () => {
  let component: RingsDetailsComponent;
  let fixture: ComponentFixture<RingsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
