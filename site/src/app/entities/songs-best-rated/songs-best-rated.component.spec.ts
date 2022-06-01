import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsBestRatedComponent } from './songs-best-rated.component';

describe('SongsBestRatedComponent', () => {
  let component: SongsBestRatedComponent;
  let fixture: ComponentFixture<SongsBestRatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsBestRatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsBestRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
