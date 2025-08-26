import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandCalendar } from './island-calendar';

describe('IslandCalendar', () => {
  let component: IslandCalendar;
  let fixture: ComponentFixture<IslandCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IslandCalendar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IslandCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
