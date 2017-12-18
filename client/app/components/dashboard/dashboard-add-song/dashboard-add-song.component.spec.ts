import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddSongComponent } from './dashboard-add-song.component';

describe('DashboardAddSongComponent', () => {
  let component: DashboardAddSongComponent;
  let fixture: ComponentFixture<DashboardAddSongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddSongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
