import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecklaceDetailsComponent } from './necklace-details.component';

describe('NecklaceDetailsComponent', () => {
  let component: NecklaceDetailsComponent;
  let fixture: ComponentFixture<NecklaceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NecklaceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NecklaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
