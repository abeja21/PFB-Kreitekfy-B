import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSongsComponent } from './news-songs.component';

describe('NewsSongsComponent', () => {
  let component: NewsSongsComponent;
  let fixture: ComponentFixture<NewsSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
