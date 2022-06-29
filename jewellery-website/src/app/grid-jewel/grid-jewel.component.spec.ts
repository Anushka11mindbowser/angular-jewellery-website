import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridJewelComponent } from './grid-jewel.component';

describe('GridJewelComponent', () => {
  let component: GridJewelComponent;
  let fixture: ComponentFixture<GridJewelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridJewelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
