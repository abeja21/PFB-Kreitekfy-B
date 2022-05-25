import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsMostFamousComponent } from './songs-most-famous.component';

describe('SongsMostFamousComponent', () => {
  let component: SongsMostFamousComponent;
  let fixture: ComponentFixture<SongsMostFamousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsMostFamousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsMostFamousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
