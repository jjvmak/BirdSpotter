import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SightingsComponent } from './sightings.component';

describe('SightingsComponent', () => {
  let component: SightingsComponent;
  let fixture: ComponentFixture<SightingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SightingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SightingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
