import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlaylistsComponent } from './dashboard-playlists.component';

describe('DashboardPlaylistsComponent', () => {
  let component: DashboardPlaylistsComponent;
  let fixture: ComponentFixture<DashboardPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
