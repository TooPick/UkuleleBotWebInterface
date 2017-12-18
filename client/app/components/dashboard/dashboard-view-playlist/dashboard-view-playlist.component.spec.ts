import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewPlaylistComponent } from './dashboard-view-playlist.component';

describe('DashboardViewPlaylistComponent', () => {
  let component: DashboardViewPlaylistComponent;
  let fixture: ComponentFixture<DashboardViewPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardViewPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardViewPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
