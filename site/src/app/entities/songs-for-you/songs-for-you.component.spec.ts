import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsForYouComponent } from './songs-for-you.component';

describe('SongsForYouComponent', () => {
  let component: SongsForYouComponent;
  let fixture: ComponentFixture<SongsForYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongsForYouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsForYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
