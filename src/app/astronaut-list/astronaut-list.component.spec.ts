import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronautListComponent } from './astronaut-list.component';

describe('AstronautListComponent', () => {
  let component: AstronautListComponent;
  let fixture: ComponentFixture<AstronautListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstronautListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstronautListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
